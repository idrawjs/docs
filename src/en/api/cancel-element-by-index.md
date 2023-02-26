# cancelElementByIndex

## Introduction

`cancelElementByIndex` It receives a index of Element to cancel the selected status of Element on Drawing-Image and then change the Element' status on Canvas.

 
## Arguments

- `{number}` `index`  Element'index in the array that `data.elements`。


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

idraw.cancelElementByIndex(0);
```

 