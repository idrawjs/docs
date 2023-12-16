# on/off

## Introduction

// TODO

## Arguments

### on

- `{string}`
- `{Function}`

### off

- `{string}`
- `{Function}`

### Event Description

| Event Name               | Introduction | Callback Arguments | Others |
| ------------------------ | ------------ | ------------------ | ------ |
| `error`                  | -            | `{Error}` -        | -      |
| `screenSelectElement`    | -            | `{object}`         | -      |
| `screenMoveElementStart` | -            | `{object}`         | -      |
| `screenMoveElementEnd`   | -            | `{object}`         | -      |
| `screenChangeElement`    | -            | `{object}`         | -      |
| `changeData`             | -            | `{object}`         | -      |
| `changeScreen`           | -            | `{object}`         | -      |

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
  devicePixelRatio: 4
};
const idraw = new iDraw(app, options, {
  scrollWrapper: { use: true }
});

idraw.on('changeData', (e) => {
  console.log('changeData: event = ', e);
});

idraw.setData(
  {
    elements: [
      /* ... */
    ]
  },
  {
    triggerChangeEvent: true
  }
);

idraw.off('changeData');
idraw.setData(data);
```

## Example

[More Demo >>](https://idraw.js.org/playground/?demo=api-on)

<iframe class="idraw-playground-preview" 
  src="https://idraw.js.org/playground/?demo=api-on&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
