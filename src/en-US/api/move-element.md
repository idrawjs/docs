# moveElement

## Introduction

`moveElement` deletes the corresponding element in the picture according to the `uuid` of the element and triggers re-rendering.

## Arguments

- `{string}` `uuid`
- `{number[]}` `position` Moves the element to the specified index position. For example, `[1, 2]` means moving the element to the third position of the second element (must be of type `Group`).

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
const data = {
  elements: [
    // ....
  ]
};
const idraw = new iDraw(app, options);
idraw.setData(data);

const uuid = idraw.getData().elements[0].uuid;

idraw.moveElement(uuid, { position: [1, 2] });
```

## Example

[More Demo](https://idrawjs.com/playground/?demo=api-moveElement)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-moveElement&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
