# tinyjs-plugin-ninepatch

> 九宫格

## 查看demo

`demo/index.html`

## 引用方法

- 推荐作为依赖使用

  - `npm install tinyjs-plugin-ninepatch --save`
  - 或者使用 ./dist/index.js 或者./dist/index.debug.js

## 起步
首先当然是要引入，推荐`NPM`方式，当然你也可以下载独立版本，先从几个例子入手吧！

##### 1、最简单的例子

引用 Tiny.js 源码
``` html
<script src="http://tinyjs.net/libs/tiny.debug.js"></script>
```

``` js
var sprite = new Tiny.NinePatch.Sprite(
        Tiny.Loader.resources['rect'].texture,
        100,
        100,
        [30, 31, 40, 41]
      );
```

## 相关文档
- [Tiny.js](http://tinyjs.net/#/docs/api)
- [九宫格](http://developer.egret.com/cn/2d/bitmapTexture/scale9Grid)

## API文档
``` js
  // 项目基于jsdoc自动生成API文档
  git clone https://github.com/qingyangmoke/tinyjs-plugin-ninepatch.git
  cd tinyjs-plugin-ninepatch
  npm i
  npm run doc
```

## demo
 ./demo

