# deleteElement

## Introduction

`addElement` Delete elements to the drawing and trigger a rerender.

## Arugments

- `{string}` `uuid`

## Returns

> None

## Usage

```js
import { iDraw } from 'idraw';

const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  devicePixelRatio: 2
};
const data = {
  elements: [
    // ....
  ]
};
const idraw = new iDraw(app, options);
idraw.setData(data);

const uuid = idraw.getData().elements[0].uuid;

idraw.deleteElement(uuid);
```

## 示例

## Example

[More Demo >>](https://idrawjs.com/playground/?demo=api-deleteElement)

<iframe 
  src="https://idrawjs.com/playground/?demo=api-deleteElement&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
