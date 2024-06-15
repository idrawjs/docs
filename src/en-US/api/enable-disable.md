# enable/disable

## Introduction

- `enable(...)` Turn on a feature
- `disable(...)` Turn off a feature

## Arguments

- `{IDrawFeature}` `feat` Feature type
  - `'ruler'`: Ruler feature
  - `'scroll'`: Scroll feature
  - `'scale'`: Scale feature
  - `'info'`: Display information, eg. element size
  - `-` Other features are to be developed...

```ts
type IDrawFeature = 'ruler' | 'scroll' | 'scale' | 'info'; // TODO other feature
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
idraw.setData(data);
idraw.disable('ruler');

setTimeout(() => {
  idraw.enable('ruler');
}, 1000);
```

## Example

[More Demo >>](https://idrawjs.com/playground/?demo=api-enable)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-enable&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
