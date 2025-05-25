# modifyElement

## Introduction

The `modifyElement` method modify graphic elements and triggers re-rendering of the canvas.

## Arguments

- `{object}` `element`

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

// ...

idraw.modifyElement({
  uuid: 'xxxxx',
  detail: {
    background: '#f0f0f0'
  }
});
```

## Example

[More demo >>](https://idrawjs.com/playground/?demo=api-modifyElement)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-modifyElement&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
