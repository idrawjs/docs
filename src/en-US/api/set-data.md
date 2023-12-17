# setData

## Introduction

`setData` The function receives a Drawing-Data to set drawing content. After that, it will re-render image base on Drawing-Data.

## Arguments

- `{object}` `data` Drawing-Data

## Returns

> None

## Usage

```js
import { iDraw } from 'idraw';

const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  devicePixelRatio: 2
};
const idraw = new iDraw(app, options);
const data = {
  elements: [
    {
      name: 'rect',
      x: 160,
      y: 120,
      w: 200,
      h: 100,
      angle: 30,
      type: 'rect',
      detail: {
        background: '#d5f5f9',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3f51b5'
      }
    }
  ]
};
idraw.setData(data);
```

## Example

[More Demo](https://idraw.js.org/playground/?demo=api-setData)

<iframe class="idraw-playground-preview" 
    src="https://idraw.js.org/playground/?demo=api-setData&header=false&sider=false&default-editor-split=50" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
