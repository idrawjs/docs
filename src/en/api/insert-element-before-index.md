# insertElementBeforeIndex

## Introduction

// TODO

## Arguments

- `{object}` `element`  [More Element Infomation>>](./../element/info.md) .
- `{number}` `index` 

## Returns

- `{string | null}` 

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
idraw.setData({ elements: [] });

idraw.insertElementBeforeIndex({
  name: "rect-xxx",
  x: 140,
  y: 120,
  w: 200,
  h: 100,
  type: "rect",
  desc: {
    bgColor: "#f7d3c1",
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#ff6032",
  },
}, 2);

```

## Example

[More Demo >>](https://idraw.js.org/playground/?demo=api-insertElementBeforeIndex)

<iframe 
  src="https://idraw.js.org/playground/?demo=api-insertElementBeforeIndex&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>