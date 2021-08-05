# moveUpElement

## Introduction

`moveUpElement` It receives a Element's uuid to lower the index position for rising layer and then trigger re-rendering

:::tip
If you update the Element'index successfully by `moveUpElement` then it will trigger event  `"changeData"` to re-render image.
:::


## Arguments

- `{string}` `uuid` Element's uuid

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
const idraw = new iDraw(app, options);

const data = {
  elements: [
    // ....
  ]
}
idraw.setData(data);

idraw.moveUpElement(
  idraw.getData().elements[1].uuid
);
```

## Example

[More Demo >>](https://idrawjs.github.io/playground/?demo=api-moveUpElement)

<iframe 
  src="https://idrawjs.github.io/playground/?demo=api-moveUpElement&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>