# resize

## Introduction

The `idraw.scale` method enables scale transformation of canvas views.

## Arguments

- `{object}` `options` View scaling configuration
  - `{number}` `options.sacle` Scaling ratio (e.g., 0.5 for 50% reduction)
  - `{x: number, y: number}` `options.point` Reference position coordinates on canvas for scaling

## Returns

> None

## Usage

```js
import { iDraw } from 'idraw';

const app = document.querySelector('#app');
const width = 600;
const height = 400;
const options = {
  width,
  height,
  devicePixelRatio: 2
};
const idraw = new iDraw(app, options);
idraw.setData({
  element: [
    /* ... */
  ]
});

idraw.scale({
  scale: 0.5,
  point: {
    // Use the canvas center as the reference point
    x: width / 2,
    y: height / 2
  }
});
```

## Demo

[More Demo >>](https://idrawjs.com/playground/?demo=api-scale)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-scale&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
