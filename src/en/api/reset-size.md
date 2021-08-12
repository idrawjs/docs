# resetSize

## Introduction

`resetSize` The function can be used to reset the size of Drawing-Board and Drawing-Context 

## Arguments

- `{object}` `options` 
  - `{number}` `options.width`  Drawing-Board width (`Not required`)
  - `{number}` `options.height` Drawing-Board height (`Not required`)
  - `{number}` `options.contextWidth` Drawing-Context width (`Not required`)
  - `{number}` `options.contextHeight` Drawing-Context height (`Not required`)
  - `{number}` `options.devicePixelRatio` Device pixel scale (`Not required`)
 
## Returns

> None

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
const idraw = new iDraw(app, options, {
  scrollWrapper: { use: true, }
});
idraw.setData({
  element: [ /* ... */ ]
});

idraw.resetSize({
  width: 300,
  height: 200,
  contextWidth: 600,
  contextHeight: 400,
});
```

## Example

[More Demo >>](https://idraw.js.org/playground/?demo=api-resetSize)

<iframe 
  src="https://idraw.js.org/playground/?demo=api-resetSize&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>