# selectElementByIndex

## Introduction

`selectElementByIndex` It receives a index of Element to select Element on Drawing-Image and then change the Element' status on Canvas.

:::tip
The object of `class iDraw` would trigger event called `screenSelectElement` when the Element is selected
:::

## Arguments

- `{number}` `index`  Element'index in the array that `data.elements`。


## Returns

> None

## Usage

```js
import iDraw from 'idraw';

const data = {
  elements: [
    // ....
  ]
}
const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4,
}
const idraw = new iDraw(app, options);
idraw.setData(data);
const resultData = idraw.getData();

idraw.selectElementByIndex(0);
```

## Example

[More Demo >>](https://idrawjs.github.io/playground/?demo=api-selectElementByIndex)

<iframe 
  src="https://idrawjs.github.io/playground/?demo=api-selectElementByIndex&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>