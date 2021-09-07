# updateElement

## Introduction

// TODO

## Arguments

- `{object}` `element`  [More Element Infomation>>](./../element/info.md) .


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

resultData.elements[0].desc.color = '#f0f0f0';

idraw.updateData(resultData.elements[0]);
```

## Example

[More Demo >>](https://idraw.js.org/playground/?demo=api-updateElement)

<iframe 
  src="https://idraw.js.org/playground/?demo=api-updateElement&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>