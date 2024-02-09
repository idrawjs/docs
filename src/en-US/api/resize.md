# resize

## Introduction

`resize` The drawing view size can be modified again

## Arguments

- `{object}` `options`
  - `{number}` `options.width`
  - `{number}` `options.height`
  - `{number}` `options.devicePixelRatio`

## Returns

> N/A

## Usage

```js
import { iDraw } from 'idraw';

const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  devicePixelRatio: 2
};
const idraw = new iDraw(app, options, {
  scrollWrapper: { use: true }
});
idraw.setData({
  element: [
    /* ... */
  ]
});

idraw.resetSize({
  width: 300,
  height: 200,
  devicePixelRatio: 2
});
```

## Example

[More Demo](https://idrawjs.com/playground/?demo=api-resize)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-resize&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
