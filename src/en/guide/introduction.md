# Introduction

## What is iDraw.js

`iDraw.js` is a JavaScript framework for drawing on web. It is based on the [`Canvas API`](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) in the browser.

It can be data-driven to render Image on Canvas in the browser. Furthermore, it can also visually handle the position, shape and layout of [Drawing-Element](./../element/info.md).

`iDraw.js` is open source based on [`MIT`](https://github.com/idrawjs/idraw/blob/main/LICENSE) License and it's code is stored in [`GitHub`](https://github.com/idrawjs/idraw) and [`NPM`](https://www.npmjs.com/package/idraw) So that you can
use `iDraw.js` for free in your own projects.

## Getting started

```sh
npm install idraw
```

```js
import iDraw from 'idraw';
const data = {
  elements: [
    {
      name: 'rect-001',
      x: 160,
      y: 80,
      w: 200,
      h: 200,
      angle: 0,
      type: 'text',
      detail: {
        text: 'Hello World',
        color: '#3f51b5',
        fontSize: 60,
        textAlign: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3f51b5'
      }
    }
  ]
};

const app = document.querySelector('#app');
const idraw = new iDraw(app, {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4
});
idraw.setData(data);
idraw.selectElementByIndex(0);
```

<iframe class="idraw-playground-preview" 
  src="https://idraw.js.org/playground/?demo=elem-text&header=false&sider=false&default-editor-split=50" 
  width="1000" height="450" frameborder="no" border="0"
  style="border: 1px solid #cecece"
></iframe>
