# setMode

## Introduction

`setMode` Can switch view operation mode

## Arguments

- `{IDrawType}` `mode` View operating mode
  - `'select'`: Selection mode, also the default mode, is used to select and edit elements
  - `'drag'`: Drag mode, used to drag and move the overall canvas position
  - `'readOnly'`: Read-only mode, only displays the view content and cannot be edited

```ts
type IDrawMode = 'select' | 'drag' | 'readOnly';
```

## Returns

> N/A

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
idraw.setMode('readOnly');
```

## Example

[More Demo >>](https://idrawjs.com/playground/?demo=api-resize)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-setMode&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
