# scrollLeft

## Introduction

`scrollLeft` Scroll Drawing context in the horizontal direction

## Arguments

- `{number}` `scrollLeft`

## Returns

- `{object}` `screenInfo`
  - `{object}` `screenInfo.size`
    - `{number}` `screenInfo.size.x`
    - `{number}` `screenInfo.size.y`
    - `{number}` `screenInfo.size.w`
    - `{number}` `screenInfo.size.h`
  - `{object}` `screenInfo.position`
    - `{number}` `screenInfo.position.top`
    - `{number}` `screenInfo.position.bottom`
    - `{number}` `screenInfo.position.left`
    - `{number}` `screenInfo.position.right`

## Usage

```js
import iDraw from 'idraw';
const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4
};
const idraw = new iDraw(app, options, {
  scrollWrapper: { use: true }
});
idraw.setData({
  elements: [
    /* ... */
  ]
});

idraw.scale(2);
idraw.scrollLeft(200);
```

## Example

[More Demo >>](https://idrawjs.github.io/playground/?demo=api-scrollLeft)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.github.io/playground/?demo=api-scrollLeft&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
