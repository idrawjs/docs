# exportDataURL

## Introduction

`exportDataURL` is used to export base64 dataURL of drawing canvas

## Arguments

- `{string}` `type` Image type, `'image/png'` | `'image/jpeg'`
- `{number}` `quality` Image quality, rang between 0-1


## Returns

- `{string}` `dataURL`  base64 dataURL of drawing canvas

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
      detail: {
        background: "#d5f5f9",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#3f51b5",
      },
    }
  ]
}
idraw.setData(data);

const dataURL = idraw.exportDataURL('image/png', 1);
```