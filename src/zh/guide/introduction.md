# 介绍

## iDraw.js 是什么

`iDraw.js` 是基于浏览器中 [`Canvas API`](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API) 的绘图能力实现的一套画图框架。

可以直接由数据驱动去渲染图画的渲染，同时能可视化操控 [图画元素](./../element/info.md) 的位置、形状和布局等信息。

`iDraw.js` 目前基于 [`MIT`](https://github.com/idrawjs/idraw/blob/main/LICENSE) 开源协议托管在[`GitHub`](https://github.com/idrawjs/idraw) 和 [`NPM`](https://www.npmjs.com/package/idraw)，所有使用者就都可以免费地使用在自己的项目中。

## 起步使用

```sh
npm install idraw
```

```js
import iDraw from 'idraw';
const data = {
  elements: [
    {
      name: "rect-001",
      x: 160,
      y: 80,
      w: 200,
      h: 200,
      angle: 0,
      type: "text",
      desc: {
        text: 'Hello World',
        color: "#3f51b5",
        fontSize: 60,
        textAlign: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#3f51b5",
      },
    },
  ],
}

const app = document.querySelector('#app');
const idraw = new iDraw(app, {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4,
});
idraw.setData(data)
idraw.selectElementByIndex(0);
```


<iframe 
  src="https://idrawjs.github.io/playground/?demo=elem-text&header=false&sider=false&default-editor-split=37" 
  width="1000" height="450" frameborder="no" border="0"
  style="border: 1px solid #cecece"
></iframe>

