# tinyjs-plugin-ninepatch

> 九宫格

## 查看demo

http://tinyjs.net/#/plugins/tinyjs-plugin-ninepatch/demo

## 引用方法

- 推荐作为依赖使用

  - `npm install tinyjs-plugin-ninepatch --save`

- 也可以直接引用线上cdn地址，注意要使用最新的版本号，例如：

 - https://gw.alipayobjects.com/as/g/tiny-plugins/tinyjs-plugin-ninepatch/0.1.2/index.debug.js
 - https://gw.alipayobjects.com/as/g/tiny-plugins/tinyjs-plugin-ninepatch/0.1.2/index.js

## 起步
首先当然是要引入，推荐`NPM`方式，当然你也可以下载独立版本，先从几个例子入手吧！

##### 1、最简单的例子

引用 Tiny.js 源码
``` html
<script src="https://gw.alipayobjects.com/as/g/tiny/tiny/1.1.5/tiny.js"></script>
```

``` js
var sprite = new Tiny.NinePatch.Sprite(
        Tiny.Loader.resources['rect'].texture,
        100,
        100,
        [30, 31, 40, 41]
      );
```
## 依赖
- `Tiny.js`: [Link](http://tinyjs.net/#/docs/api)

## 相关文档
- [Tiny.js](http://tinyjs.net/#/docs/api)
- [九宫格](http://developer.egret.com/cn/2d/bitmapTexture/scale9Grid)

## API文档
http://tinyjs.net/#/plugins/tinyjs-plugin-ninepatch/docs
