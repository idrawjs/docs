# 快速上手

## 第一个例子

这是一个最简单的 iDraw.js 例子，绘制一个旋转的矩形。

<div>
  <iframe 
    src="https://idrawjs.github.io/playground/?demo=elem-rect&header=false&sider=false&default-editor-split=37" 
    width="1000" height="520" frameborder="no" border="0"
    style="border: 1px solid #cecece"
  ></iframe>
</div>

## 安装模块

```sh
npm install idraw
```

## 渲染DOM的位置

```html
<div id="app"></div>
```

## 使用 iDraw.js

```js
import iDraw from 'idraw';
const data = {
  elements: [
    {
      name: "rect-001",
      x: 160,
      y: 120,
      w: 200,
      h: 100,
      angle: 30,
      type: "rect",
      desc: {
        color: "#d5f5f9",
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

// 设置数据
idraw.setData(data);

// 默认选中第一个元素
idraw.selectElementByIndex(0);
```

至此，小伙伴们就可以愉快的开启 iDraw.js 的画图之旅啦！O(∩_∩)O~