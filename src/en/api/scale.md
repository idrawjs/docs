# scale

## Introduction

`scale` Scale Drawing context

## Arguments

- `{number}` `scale`

## Returns

// TODO

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

```ts
{
  size: {
    x: number;
    y: number;
    w: number;
    h: number;
  },
  position: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  }
}
```

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
```

## Example

[More Demo >>](https://idraw.js.org/playground/?demo=api-scale)

<iframe class="idraw-playground-preview" 
  src="https://idraw.js.org/playground/?demo=api-scale&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
