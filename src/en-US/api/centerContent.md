# centerContent

## Introduction

`centerContent` Display the content in the center of the view. If the content size exceeds the view, the content will be proportionally reduced and centered in the view.

## Arguments

- `{object} options`
  - `{Data}` `options.data` Optionally, calculate new content data for centered dimensions.

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

idraw.centerContent();
```

## Example

[More Demo](https://idraw.js.org/playground/?demo=api-centerContent)

<iframe class="idraw-playground-preview" 
  src="https://idraw.js.org/playground/?demo=api-centerContent&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
