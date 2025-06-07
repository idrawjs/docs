# Data Layout

## What is iDraw.js's Data Layout

`iDraw.js` handles the layout rendering of drawing content, primarily providing an overall background layout and container for the content. This includes elements such as the coordinate origin point, length, width, and background color of the content canvas, as well as whether overflow hidden is enabled for content.

## Layout

### Interface

```tsx
type Data = {
  elements: Element[];
  layout: {
    x: number;
    y: number;
    w: number;
    h: number;
    detail: {
      background?: string;
      overflow?: 'hidden' | 'visiable'; // default  'visiable'
    };
  };
};
```

### Layout Properties

| Property | Description      | Type                                                              | Default | Required | Others |
| -------- | ---------------- | ----------------------------------------------------------------- | ------- | -------- | ------ |
| x        | X-axis offset    | `number`                                                          | -       | `true`   | -      |
| y        | Y-axis offset    | `number`                                                          | -       | `true`   | -      |
| w        | Layout width     | `number`                                                          | -       | `true`   | -      |
| h        | Layout height    | `number`                                                          | -       | `true`   | -      |
| detail   | Detail of layout | `object` (Please check the description of `Typescript interface`) | -       | `true`   | -      |

## Usage of Layout

```js
import { iDraw } from 'idraw';

import { iDraw } from 'idraw';
const data = {
  elements: [
    /* ... */
  ],
  layout: {
    x: -100,
    y: -100,
    w: 800,
    h: 600,
    detail: {
      background: '#0000ff1F',
      overflow: 'hidden'
    }
  }
};

const app = document.querySelector('#app');
const idraw = new iDraw(app, {
  width: 600,
  height: 400,
  devicePixelRatio: 2
});

idraw.setData(data);
```

## Demo Preview

[More Demos >>](https://idrawjs.com/playground/?demo=data-layout)

<iframe class="idraw-playground-preview" src="https://idrawjs.com/playground/?demo=data-layout&header=false&sider=false&default-editor-split=50"
      frameborder="no" border="0" 
  ></iframe>
