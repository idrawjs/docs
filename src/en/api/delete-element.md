# deleteElement

## Introduction

// TODO

## Arugments

- `{string}` `uuid`

## Returns

> None

## Usage

```js
import iDraw from 'idraw';

const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4,
}
const data = {
  elements: [
    // ....
  ]
}
const idraw = new iDraw(app, options);
idraw.setData(data);

idraw.deleteElement(
  idraw.getData().elements[0].uuid
);
```

## Example

[More Demo >>](https://idraw.js.org/playground/?demo=api-deleteElement)

<iframe 
  src="https://idraw.js.org/playground/?demo=api-deleteElement&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>