# selectElement

## Introduction

`selectElement` It receives a uuid of Element to select Element on Drawing-Image and then change the Element' status on Canvas.

## Arguments

- `{string}` `uuid` Element's uuid

## Returns

> None

## Usage

```js
import { iDraw } from 'idraw';

const data = {
  elements: [
    // ....
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

idraw.selectElement(resultData.elements[0].uuid);
```

## Example

[More Demo >>](https://idrawjs.com/playground/?demo=api-selectElement)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-selectElement&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
