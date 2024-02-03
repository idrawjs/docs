# getData

## Introduction

`getData` The function can be used to get lastest Drawing-Data of Image;

## Arguments

- `{object}` `options`
  - `{boolean}` `options.compact`

## Returns

- `{object}` `data` Drawing-Data

## Usage

```js
import { iDraw } from 'idraw';

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

const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  devicePixelRatio: 2
};
const idraw = new iDraw(app, options);
idraw.setData(data);

const resultData = idraw.getData();
console.log(resultData);
```

## Example

[More Demo](https://idraw.js.org/playground/?demo=api-getData)

<iframe 
  src="https://idraw.js.org/playground/?demo=api-getData&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
