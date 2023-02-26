# cancelElement

## Introduction

`cancelElement` It receives a uuid of Element to  cancel the selected status of Element on Drawing-Image and then change the Element' status on Canvas.

 

## Arguments

- `{string}` `uuid` Element's uuid

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

idraw.cancelElement(resultData.elements[0].uuid);
```
