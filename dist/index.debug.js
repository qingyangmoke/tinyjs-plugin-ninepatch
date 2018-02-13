/*!
 * tinyjs-plugin-ninepatch
 * Description:Tinyjs 九宫格
 * Author: 清扬陌客
 * Version: v0.2.1
 * Github: https://github.com/qingyangmoke/tinyjs-plugin-ninepatch.git
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NinePatch"] = factory();
	else
		root["Tiny"] = root["Tiny"] || {}, root["Tiny"]["NinePatch"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/song/Develop/github/tinyjs-plugin-ninepatch/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Sprite = undefined;

	var _Sprite = __webpack_require__(2);

	var _Sprite2 = _interopRequireDefault(_Sprite);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Sprite = _Sprite2.default; /**
	                                   * Tiny.js
	                                   * @external Tiny
	                                   * @see {@link http://tinyjs.net/}
	                                   */

	/**
	 * @namespace NinePatch
	 * @memberof Tiny
	 */

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	var Sprite = function (_Tiny$Sprite) {
	  _inherits(Sprite, _Tiny$Sprite);

	  /**
	  * @constructor
	  * @param {Tiny.BaseTexture} texture - 九宫格纹理
	  * @param {number} width - 宽度
	  * @param {number} height - 高度
	  * @param {Array<Number>} scale9Grid - 九宫格定义
	  */
	  function Sprite(texture, width, height, scale9Grid) {
	    _classCallCheck(this, Sprite);

	    var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this));

	    _this._gridTexture = texture;

	    _this._debugDraw = false;

	    /**
	     * 存储九宫格纹理
	     * @private
	     */
	    _this._textures = [];

	    /**
	     * 存储九宫格sprite对象
	     * @private
	     */
	    _this._gridSprites = [];

	    /**
	    * 真实宽度
	    * @private
	    */
	    _this._targetWidth = width || 0;

	    /**
	    * 真实高度
	    * @private
	    */
	    _this._targetHeight = height || 0;

	    /**
	     * 素材的原始尺寸
	     * @private
	     */
	    _this._textureOrigFrame = new Tiny.Rectangle(0, 0, _this._gridTexture.width, _this._gridTexture.height);

	    /**
	     * 九宫格设置
	     * @private
	     */
	    _this._scale9Grid = null;

	    _this._inited = false;

	    _this._init();

	    // this._update();

	    _this.scale9Grid = scale9Grid;

	    if (_this._gridTexture.baseTexture.hasLoaded) {
	      _this._onGridTextureUpdate();
	    } else {
	      _this._gridTexture.once('update', _this._onGridTextureUpdate, _this);
	    }
	    return _this;
	  }

	  _createClass(Sprite, [{
	    key: '_onGridTextureUpdate',
	    value: function _onGridTextureUpdate() {
	      this._update();
	    }
	  }, {
	    key: '_init',
	    value: function _init() {
	      if (this._inited) return;
	      this._inited = true;
	      for (var i = 0; i < 9; i++) {
	        var t = new Tiny.Texture(this._gridTexture, new Tiny.Rectangle(0, 0, this._gridTexture.width, this._gridTexture.height), new Tiny.Rectangle(0, 0, this._gridTexture.width, this._gridTexture.height), null, 0);
	        this._textures.push(t);
	        var child = new Tiny.Sprite(t);
	        child.visible = false;
	        this._gridSprites.push(child);
	        this.addChild(child);
	      }
	    }

	    /**
	    * @name Tiny.NinePatch.Sprite#debug
	    * @property {boolean} debug - 是否开启调试模式 默认false
	    */

	  }, {
	    key: 'resize',


	    /**
	    * 改变尺寸
	    * @private
	    * @method Tiny.NinePatch.Sprite#resize
	    * @param {number} width 宽度
	    * @param {number} height 高度
	    */
	    value: function resize(width, height) {
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

	  }, {
	    key: '_update',
	    value: function _update() {
	      if (!this._gridTexture) return;
	      // 容错
	      if (this.width < this._gridTexture.width || this.height < this._gridTexture.height) {
	        console.warn('九宫格尺寸设置异常，尺寸不能小于素材尺寸');
	      }

	      var scale9Grid = this._scale9Grid;
	      var w1 = scale9Grid[0];
	      var w2 = Math.max(0, scale9Grid[2]);
	      var w3 = Math.max(0, this._gridTexture.width - w1 - w2);

	      var h1 = scale9Grid[1];
	      var h2 = Math.max(0, scale9Grid[3]);
	      var h3 = Math.max(0, this._gridTexture.height - h1 - h2);

	      var wArr = [w1, w2, w3];
	      var xArr = [0, w1, w1 + w2];

	      var hArr = [h1, h2, h3];
	      var yArr = [0, h1, h1 + h2];

	      for (var row = 0; row < 3; row++) {
	        for (var col = 0; col < 3; col++) {
	          var i = row * 3 + col;
	          var child = this._gridSprites[i];
	          var frame = new Tiny.Rectangle(xArr[col], yArr[row], wArr[col], hArr[row]);
	          if (frame.width > 0 && frame.height > 0) {
	            var w = col === 0 || col === 2 ? wArr[col] : Math.max(0, this.width - wArr[0] - wArr[2]);
	            var h = row === 0 || row === 2 ? hArr[row] : Math.max(0, this.height - hArr[0] - hArr[2]);
	            var x = col === 0 ? 0 : col === 1 ? wArr[0] : Math.max(0, this.width - wArr[2]);
	            var y = row === 0 ? 0 : row === 1 ? hArr[0] : Math.max(0, this.height - hArr[2]);
	            if (w > 0 && h > 0) {
	              this._textures[i].frame = frame;
	              child.anchor.set(0, 0);
	              child.x = x;
	              child.y = y;
	              child.alpha = this._debugDraw ? 0.1 + i * 0.05 : 1;
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
	  }, {
	    key: 'debug',
	    get: function get() {
	      return this._debugDraw;
	    },
	    set: function set(value) {
	      this._debugDraw = value;
	      this._update();
	    }
	    /**
	    * @name Tiny.NinePatch.Sprite#scale9Grid
	    * @property {string | Array} scale9Grid - 九宫格数据 "30,10,10,5" 或者 [30,10,10,5]
	    */

	  }, {
	    key: 'scale9Grid',
	    get: function get() {
	      return this._scale9Grid;
	    },
	    set: function set(value) {
	      if (value) {
	        var newGrid = typeof value === 'string' ? value.split(',') : value;
	        if (newGrid.length !== 4) {
	          console.error('error scale9Grid format', value);
	          return;
	        }
	        newGrid = newGrid.map(function (e) {
	          return parseFloat(e);
	        });
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

	  }, {
	    key: 'width',
	    get: function get() {
	      return this._targetWidth || this._gridTexture.width;
	    },
	    set: function set(value) {
	      this._targetWidth = value;
	      this._update();
	    }

	    /**
	    * @name Tiny.NinePatch.Sprite#height
	    * @property {number} height - 高度
	    */

	  }, {
	    key: 'height',
	    get: function get() {
	      return this._targetHeight || this._gridTexture.height;
	    },
	    set: function set(value) {
	      this._targetHeight = value;
	      this._update();
	    }
	  }]);

	  return Sprite;
	}(Tiny.Sprite);

	exports.default = Sprite;

/***/ })
/******/ ])
});
;