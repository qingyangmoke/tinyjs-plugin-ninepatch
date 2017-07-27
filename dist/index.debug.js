/*!
 * Tiny.Weapon
 * Description:Tinyjs 九宫格
 * Author: 清扬陌客
 * Version: v0.0.2
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
	 * @extends Tiny.Container
	 */
	var Sprite = function (_Tiny$Sprite) {
	  _inherits(Sprite, _Tiny$Sprite);

	  /**
	  * @constructor
	  * @param {Tiny.BaseTexture} texture - 九宫格纹理
	  * @param {Array<Number>} scale9Grid - 九宫格定义
	  * @param {number} width - 宽度
	  * @param {number} height - 高度
	  */
	  function Sprite(texture, width, height, scale9Grid) {
	    _classCallCheck(this, Sprite);

	    /*
	        九宫格的概念 参考了白鹭的文档 http://developer.egret.com/cn/2d/bitmapTexture/scale9Grid
	        九宫格位置  scale9Grid=[30,31,50,41] 则表示的含义为 [30：区域1 的宽度值， 31：区域1 的高度值， 40：区域2 的宽度值 ，41：区域4 的高度值]
	        ------------—
	        | 1 | 2 | 3 |
	        -------------
	        | 4 | 5 | 6 |
	        -------------
	        | 7 | 8 | 9 |
	        -------------
	    */

	    var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this));

	    _this.baseTexture = texture;
	    /**
	     * @private
	     */
	    _this._loaded = 0;

	    /**
	     * 存储九宫格纹理
	     */
	    _this._textures = [];
	    /**
	     * @private
	     * 存储九宫格sprite对象
	     */
	    _this._gridSprites = [];

	    if (width === undefined) {
	      width = _this.baseTexture.width;
	    }

	    if (height === undefined) {
	      height = _this.baseTexture.height;
	    }

	    _this._targetWidth = width;
	    _this._targetHeight = height;

	    var w1 = scale9Grid[0];
	    var w2 = scale9Grid[2];
	    var w3 = _this.baseTexture.width - w1 - w2;

	    var h1 = scale9Grid[1];
	    var h2 = scale9Grid[3];
	    var h3 = _this.baseTexture.height - h1 - h2;

	    var wArr = [w1, w2, w3];
	    var xArr = [0, w1, w1 + w2];

	    var hArr = [h1, h2, h3];
	    var yArr = [0, h1, h1 + h2];

	    var rectFrames = [];
	    for (var row = 0; row < 3; row++) {
	      for (var col = 0; col < 3; col++) {
	        var rect = new Tiny.Rectangle(xArr[col], yArr[row], wArr[col], hArr[row]);
	        rectFrames.push(rect);
	      }
	    }

	    var orig = new Tiny.Rectangle(0, 0, _this.baseTexture.width, _this.baseTexture.height);
	    var trim = null;
	    for (var i = 0; i < 9; i++) {
	      var frame = rectFrames[i];
	      var t = new Tiny.Texture(_this.baseTexture, frame, orig, trim, 0);
	      _this._textures.push(t);
	      var child = new Tiny.Sprite(t);
	      _this._gridSprites.push(child);
	      child.x = frame.x;
	      child.y = frame.y;
	      child.width = frame.width;
	      child.height = frame.height;
	      _this.addChild(child);
	      _this._loaded++;
	    }

	    _this._update();
	    return _this;
	  }

	  /**
	  * @name Tiny.NinePatch.Sprite#width
	  * @property {number} width - 宽度
	  */


	  _createClass(Sprite, [{
	    key: 'resize',


	    /**
	    * 改变尺寸
	    * @private
	    * @method Tiny.NinePatch.Sprite#resize
	    * @param {number} width 宽度
	    * @param {number} height 高度
	    */
	    value: function resize(width, height) {
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
	    value: function _update(width, height) {
	      // 更新宽度 如果需要的话
	      if (width !== undefined) {
	        this._targetWidth = width;
	      }

	      // 更新高度 如果需要的话
	      if (height !== undefined) {
	        this._targetHeight = height;
	      }

	      // 容错
	      if (this._targetWidth < this.baseTexture.width || this._targetHeight < this.baseTexture.height) {
	        throw Error('九宫格尺寸设置错误，尺寸不能小于素材尺寸');
	      }

	      if (this._loaded !== 9) return;

	      var child;

	      // 九宫格位置2 顶部中间 top middle
	      child = this._gridSprites[1];
	      child.position.set(this.children[0].width, 0);
	      child.width = this._targetWidth - child.x - this.children[2].width;

	      // 九宫格位置 3 顶部右上角
	      child = this._gridSprites[2];
	      child.position.set(this._targetWidth - child.width, 0);

	      // 九宫格位置4 中间左侧
	      child = this._gridSprites[3];
	      child.position.set(0, this.children[0].height);
	      child.height = this._targetHeight - child.y - this.children[6].height;

	      // 九宫格位置5 正中间
	      child = this._gridSprites[4];
	      child.position.set(this.children[1].x, this.children[3].y);
	      child.height = this.children[3].height;
	      child.width = this.children[1].width;

	      // 九宫格位置6 中间右侧
	      child = this._gridSprites[5];
	      child.position.set(this._targetWidth - child.width, this.children[3].y);
	      child.height = this.children[3].height;

	      // 九宫格位置7 底部左侧
	      child = this._gridSprites[6];
	      child.position.set(0, this._targetHeight - child.height);

	      // 九宫格位置8 底部中间
	      child = this._gridSprites[7];
	      child.position.set(this.children[1].x, this._targetHeight - child.height);
	      child.width = this.children[1].width;

	      // 九宫格位置9 底部右侧
	      child = this._gridSprites[8];
	      child.position.set(this._targetWidth - child.width, this._targetHeight - child.height);

	      // this.dispatch('updated');
	    }
	  }, {
	    key: 'width',
	    get: function get() {
	      return this._targetWidth;
	    },
	    set: function set(value) {
	      if (this._targetWidth < this.baseTexture.width) {
	        throw Error('九宫格尺寸设置错误，尺寸不能小于素材尺寸');
	      }
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
	      return this._targetHeight;
	    },
	    set: function set(value) {
	      if (this._targetHeight < this.baseTexture.height) {
	        throw Error('九宫格尺寸设置错误，尺寸不能小于素材尺寸');
	      }
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