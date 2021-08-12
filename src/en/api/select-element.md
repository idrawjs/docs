# selectElement

## Introduction

`selectElement` It receives a uuid of Element to select Element on Drawing-Image and then change the Element' status on Canvas.

:::tip
The object of `class iDraw` would trigger event called `screenSelectElement` when the Element is selected
:::

## Arguments

- `{string}` `uuid` Element's uuid

:::tip
If you add Element without uuid by `setData` of `addElement`, the `iDraw.js` will automatically generate the uuid of the new Element.
:::

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

idraw.selectElement(resultData.elements[0].uuid);
```

## Example

[More Demo >>](https://idraw.js.org/playground/?demo=api-selectElement)

<iframe 
  src="https://idraw.js.org/playground/?demo=api-selectElement&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>