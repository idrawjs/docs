# addElement

## Introduction

`addElement` Add elements to the drawing and trigger a rerender.

## Arguments

- `{object}` `element` [More Element Infomation>>](./../element/info.md) .

- `{object}` `{ position?: number[] }`，Optional configuration, `position` element index position, for example `[1, 2]` means adding the element to the third position of the second element (must be of type `Group`).

## Returns

- `{object}`

## Usage

```js
import { iDraw } from 'idraw';

const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  devicePixelRatio: 2
};
const idraw = new iDraw(app, options);
idraw.setData({ elements: [] });

idraw.addElement({
  name: 'rect',
  x: 140,
  y: 120,
  w: 200,
  h: 100,
  type: 'rect',
  detail: {
    background: '#f7d3c1',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#ff6032'
  }
});
```

## Example

[More Demo >>](https://idrawjs.com/playground/?demo=api-addElement)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-addElement&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
