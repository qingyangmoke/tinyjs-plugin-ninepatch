# tinyjs-plugin-ninepatch

> 九宫格

## 查看demo

https://qingyangmoke.github.io/tinyjs-plugin-ninepatch/demo/

## 引用方法

- 推荐作为依赖使用

  - `npm install tinyjs-plugin-ninepatch --save`

- 也可以直接引用线上cdn地址，注意要使用最新的版本号，例如：

 - https://gw.alipayobjects.com/as/g/tiny-plugins/tinyjs-plugin-ninepatch/0.2.3/index.debug.js
 - https://gw.alipayobjects.com/as/g/tiny-plugins/tinyjs-plugin-ninepatch/0.2.3/index.js

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

## 九宫格概念
```
  九宫格定义：  scale9Grid=[30,31,50,41]

  表示的含义为 [30：区域1 的宽度值，
              31：区域1 的高度值，
              40：区域2 的宽度值 ，
              41：区域4 的高度值]
       ------------—
       | 1 | 2 | 3 |
       -------------
       | 4 | 5 | 6 |
       -------------
       | 7 | 8 | 9 |
       -------------
 ```

## 注意事项

1. **sprite的宽高不要小于九宫格图片的尺寸**
2. **如果图片是半透明的 请把padding设置成0 否则重合部分有黑线**

## 依赖
- `Tiny.js`: [Link](http://tinyjs.net/#/docs/api)

## 相关文档
- [Tiny.js](http://tinyjs.net/#/docs/api)
- [九宫格](http://developer.egret.com/cn/2d/bitmapTexture/scale9Grid)

## API文档
http://tinyjs.net/#/plugins/tinyjs-plugin-ninepatch/docs
