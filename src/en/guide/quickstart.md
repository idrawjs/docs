# Quick Start

## The First Example

It is a simple example of `iDraw.js` that drawing a rotating rectangle.

<div>
  <iframe class="idraw-playground-preview" 
    src="https://idraw.js.org/playground/?demo=elem-rect&header=false&sider=false&default-editor-split=50" 
    width="1000" height="520" frameborder="no" border="0"
    style="border: 1px solid #cecece"
  ></iframe>
</div>

## Install NPM Module

```sh
npm install idraw
```

## Mounted DOM

```html
<div id="app"></div>
```

## Use iDraw.js

```js
import iDraw from 'idraw';
const data = {
  elements: [
    {
      name: 'rect-001',
      x: 160,
      y: 120,
      w: 200,
      h: 100,
      angle: 30,
      type: 'rect',
      detail: {
        background: '#d5f5f9',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3f51b5'
      }
    }
  ]
};

const app = document.querySelector('#app');
const idraw = new iDraw(app, {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4
});

// Setting data
idraw.setData(data);

// Select first element by default
idraw.selectElementByIndex(0);
```

Now, we can start the tutorials for using `iDraw.js`. O(∩_∩)O~
