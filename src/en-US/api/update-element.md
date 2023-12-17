# updateElement

## Introduction

`updateElement` updates an element in the drawing and triggers a re-rendering.

## Arguments

- `{object}` `element`

## Returns

> N/A

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

const elem = resultData.elements[0];

elem.detail.color = '#f0f0f0';

idraw.updateData(elem);
```

## Example

[More Demo >>](https://idraw.js.org/playground/?demo=api-updateElement)

<iframe class="idraw-playground-preview" 
  src="https://idraw.js.org/playground/?demo=api-updateElement&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
