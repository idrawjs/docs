# setData

## Introduction

`setData` The function receives a Drawing-Data to set drawing content. After that, it will re-render image base on Drawing-Data.

## Arguments

- `{object}` `data` Drawing-Data
- `{object}` `options` 
  - `{boolean}` `options.triggerChangeEvent` Trigger internal event named `changeData`.

:::tip
If it sets `options.triggerChangeEvent = true`, `idraw.on('changeData', (e) => { })` will listen `"changeData"` event and return  the lastest Changed-Drawing-Data in callback function.
:::

## Returns

> None

## Usage

```js
import iDraw from 'idraw';

const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4,
}
const idraw = new iDraw(app, options);
const data = {
  elements: [
    {
      name: "rect",
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
    }
  ]
}
idraw.setData(data);
```

## Example

[More Demo](https://idrawjs.github.io/playground/?demo=api-setData)

<iframe 
    src="https://idrawjs.github.io/playground/?demo=api-setData&header=false&sider=false&default-editor-split=37" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>