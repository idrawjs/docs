# getSelectedElements

## Introduction

// TODO

## Arguments

> None


## Returns

- `{TypeElement}[]`

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

const elems = idraw.getSelectedElements();
```

## Example

[More Demo >>](https://idraw.js.org/playground/?demo=api-getSelectedElements)

<iframe 
  src="https://idraw.js.org/playground/?demo=api-getSelectedElements&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>