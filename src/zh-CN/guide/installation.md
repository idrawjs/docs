# 安装

## 最新版本

[![iDraw.js](https://img.shields.io/npm/v/idraw.svg?sanitize=idraw)](https://www.npmjs.com/package/idraw)

## 安装方式

将 iDraw.js 添加到项目中有三种方式：

1. 基于 [NPM](#npm) 安装
2. 在页面上以 [CDN](#cdn) 形式引入。
3. 下载 JavaScript 文件，并且[自托管JavaScript文件](#自托管JavaScript文件)

## NPM

在开发大型项目应用时候，推荐使用 NPM 的安装方式，可以更好的基于 Webpack 、 Rollup 和 Vite 等构建工具结合使用。

```sh
npm install idraw
```

## CDN

在小型项目应用场景或者学习场景时候，可以使用 CDN的方式引用最新的版本的 JavaScript 文件：

```html
<script src="https://unpkg.com/idraw"></script>
```

```html
<!-- 全局变量使用 -->
<script>
  (function () {
    const { iDraw } = window.iDraw;
    const app = document.querySelector('#app');
    const idraw = new iDraw(app, {
      width: 600,
      height: 400,
      devicePixelRatio: 2
    });
  })();
</script>
```

:::warning
不建议用 unpkg.com 站点的CDN资源的放在生产环境
:::

## 自托管JavaScript文件

如果不想使用构建工具，同时无法直接使用 CDN方式 调用，那么可以将相关的 `.js` 文件下载到项目本地或者服务器上托管。最后通过 `<script>` 方式引用，使用方法跟 CDN 的方式类似。

具体的 JavaScript文件 可以从 [unpkg](https://unpkg.com/idraw) 这里下载最新的 `iDraw.js` 文件。
