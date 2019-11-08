/**
 * 九宫格的概念 参考了白鹭的文档 http://developer.egret.com/cn/2d/bitmapTexture/scale9Grid
 * 九宫格位置  scale9Grid=[30,31,50,41] 则表示的含义为 [30：区域1 的宽度值， 31：区域1 的高度值， 40：区域2 的宽度值 ，41：区域4 的高度值]
 *
 * TODO： 设计成 => 区域1的宽度 区域1的高度 区域3的宽度 区域7的高度 是不是更合理一些呢？
 *     ------------—
 *      | 1 | 2 | 3 |
 *      -------------
 *      | 4 | 5 | 6 |
 *      -------------
 *      | 7 | 8 | 9 |
 *      -------------
 * @class Sprite
 * @constructor
 * @memberof Tiny.NinePatch
 * @extends Tiny.Sprite
 */
class Sprite extends Tiny.Sprite {
  /**
  * @constructor
  * @param {Tiny.BaseTexture} texture - 九宫格纹理
  * @param {number} width - 宽度
  * @param {number} height - 高度
  * @param {Array<Number>} scale9Grid - 九宫格定义
  * @param {Array<Number>} overlapPadding - canvas渲染的时候 可能会有缝隙 用这个来修复 默认是1
  */
  constructor(texture, width, height, scale9Grid, overlapPadding = 1) {
    super();
    this._gridTexture = texture;

    this._debugDraw = false;

    /**
     * 存储九宫格纹理
     * @private
     */
    this._textures = [];

    /**
     * 存储九宫格sprite对象
     * @private
     */
    this._gridSprites = [];

    /**
    * 真实宽度
    * @private
    */
    this._targetWidth = width || 0;

    /**
    * 真实高度
    * @private
    */
    this._targetHeight = height || 0;

    /**
     * 素材的原始尺寸
     * @private
     */
    this._textureOrigFrame = new Tiny.Rectangle(0, 0, this._gridTexture.width, this._gridTexture.height);

    /**
     * 九宫格设置
     * @private
     */
    this._scale9Grid = null;

    /**
    * canvas渲染的时候 可能会有缝隙 用这个来修复 默认是0
    */
    this._overlapPadding = overlapPadding;

    this._inited = false;

    this._init();

    // this._update();

    this.scale9Grid = scale9Grid;

    if (this._gridTexture.baseTexture.hasLoaded) {
      this._onGridTextureUpdate();
    } else {
      this._gridTexture.once('update', this._onGridTextureUpdate, this);
    }
  }

  _onGridTextureUpdate() {
    this._update();
  }

  _init() {
    if (this._inited) return;
    this._inited = true;
    for (let i = 0; i < 9; i++) {
      const t = new Tiny.Texture(
        this._gridTexture,
        new Tiny.Rectangle(0, 0, this._gridTexture.width, this._gridTexture.height),
        new Tiny.Rectangle(0, 0, this._gridTexture.width, this._gridTexture.height),
        null,
        0
      );
      this._textures.push(t);
      const child = new Tiny.Sprite(t);
      child.visible = false;
      this._gridSprites.push(child);
      this.addChild(child);
    }
  }

  /**
  * @name Tiny.NinePatch.Sprite#debug
  * @property {boolean} debug - 是否开启调试模式 默认false
  */
  get debug() {
    return this._debugDraw;
  }
  set debug(value) {
    this._debugDraw = value;
    this._update();
  }
  /**
  * @name Tiny.NinePatch.Sprite#scale9Grid
  * @property {string | Array} scale9Grid - 九宫格数据 "30,10,10,5" 或者 [30,10,10,5]
  */
  get scale9Grid() {
    return this._scale9Grid;
  }
  set scale9Grid(value) {
    if (value) {
      let newGrid = typeof value === 'string' ? value.split(',') : value;
      if (newGrid.length !== 4) {
        console.error('error scale9Grid format', value);
        return;
      }
      newGrid = newGrid.map((e) => parseFloat(e));
      this._scale9Grid = newGrid;
    } else {
      this._scale9Grid = [0, 0, 0, 0];
    }
    this._update();
  }

  /**
  * @name Tiny.NinePatch.Sprite#width
  * @property {number} width - 宽度
  */
  get width() {
    return this._targetWidth || this._gridTexture.width;
  }
  set width(value) {
    this._targetWidth = value;
    this._update();
  }

  /**
  * @name Tiny.NinePatch.Sprite#height
  * @property {number} height - 高度
  */
  get height() {
    return this._targetHeight || this._gridTexture.height;
  }
  set height(value) {
    this._targetHeight = value;
    this._update();
  }

  /**
  * @name Tiny.NinePatch.Sprite#overlapPadding
  * @property {number} overlapPadding - 九宫格之间的重合度 canvas渲染的时候 可能会有缝隙 用这个来修复 默认是0
  */
  get overlapPadding() {
    return this._overlapPadding;
  }
  set overlapPadding(value) {
    this._overlapPadding = +value || 0;
    this._update();
  }

  /**
  * 改变尺寸
  * @private
  * @method Tiny.NinePatch.Sprite#resize
  * @param {number} width 宽度
  * @param {number} height 高度
  */
  resize(width, height) {
    this._targetWidth = width;
    this._targetHeight = height;
    this._update(width, height);
  }

  /**
   * 更新
   * @private
   * @method Tiny.NinePatch.Sprite#update
   * @param {number} [width=null]
   * @param {number} [height=null]
   */
  _update() {
    if (!this._gridTexture) return;
    // 容错
    if (this.width < this._gridTexture.width || this.height < this._gridTexture.height) {
      console.warn('九宫格尺寸设置异常，尺寸不能小于素材尺寸');
    }

    const realWidth = Math.max(this.width, this._gridTexture.width);
    const realHeight = Math.max(this.height, this._gridTexture.height);

    const frameX = this._gridTexture.frame ? this._gridTexture.frame.left : 0;
    const frameY = this._gridTexture.frame ? this._gridTexture.frame.top : 0;

    const scale9Grid = this._scale9Grid;
    const w1 = scale9Grid[0];
    const w2 = Math.max(0, scale9Grid[2]);
    const w3 = Math.max(0, this._gridTexture.width - w1 - w2);

    const h1 = scale9Grid[1];
    const h2 = Math.max(0, scale9Grid[3]);
    const h3 = Math.max(0, this._gridTexture.height - h1 - h2);

    const wArr = [w1, w2, w3];
    const xArr = [frameX, frameX + w1, frameX + w1 + w2];

    const hArr = [h1, h2, h3];
    const yArr = [frameY, frameY + h1, frameY + h1 + h2];

    const overlapPadding = this.overlapPadding;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const i = row * 3 + col;
        const child = this._gridSprites[i];
        const frame = new Tiny.Rectangle(xArr[col], yArr[row], wArr[col], hArr[row]);
        if (frame.width > 0 && frame.height > 0) {
          const w = (col === 0 || col === 2) ? wArr[col] : Math.max(0, realWidth - wArr[0] - wArr[2]);
          const h = (row === 0 || row === 2) ? hArr[row] : Math.max(0, realHeight - hArr[0] - hArr[2]);
          const x = col === 0 ? 0 : col === 1 ? wArr[0] : Math.max(0, realWidth - wArr[2]);
          const y = row === 0 ? 0 : row === 1 ? hArr[0] : Math.max(0, realHeight - hArr[2]);
          if (w > 0 && h > 0) {
            this._textures[i].frame = frame;
            child.anchor.set(0, 0);
            child.x = x - col * overlapPadding;
            child.y = y - row * overlapPadding;
            child.alpha = this._debugDraw ? (0.1 + i * 0.05) : 1;
            child.width = w;
            child.height = h;
            child.visible = true;
          } else {
            child.visible = false;
          }
        } else {
          child.visible = false;
        }
      }
    }
    this.emit('resize');
  }
}

export default Sprite;
