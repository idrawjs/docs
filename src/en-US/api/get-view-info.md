# getViewInfo

## Introduction

`getViewInfo` Used to get drawing view size information and drawing view zoom information.

## Arguments

> 无

## Returns

- `{object}`
  - `viewSizeInfo` drawing view size information
  - `viewScaleInfo` drawing view zoom information

## Usage

```js
import { iDraw } from 'idraw';
import data from './data';

const app = document.querySelector('#app');
const options = {
  width: 320,
  height: 320,
  devicePixelRatio: 2
};
const idraw = new iDraw(app, options);
idraw.setData(data);

console.log(idraw.getViewInfo());
```

## Example

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=api-getViewInfo)

<iframe class="idraw-playground-preview" 
  src="https://idraw.js.org/playground/?demo=api-getViewInfo&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
