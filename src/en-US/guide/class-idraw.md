# Class iDraw

## Arguments

```js
import { iDraw } from 'idraw';
const dom = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  devicePixelRatio: 2
};

const idraw = new iDraw(dom, options);
```

| Arugment | Description             | Type             | Default | Required | Others |
| -------- | ----------------------- | ---------------- | ------- | -------- | ------ |
| dom      | Canvas mounted DOM      | `HTMLDivElement` | -       | `true`   | -      |
| options  | Image rendering options | [Object]         | -       | `true`   | -      |

## Options

```ts
type Options = {
  width: number;
  height: number;
  devicePixelRatio: number;
};
```

### Options Properties

| Property         | Description            | Type     | Default | Required | Others |
| ---------------- | ---------------------- | -------- | ------- | -------- | ------ |
| width            | Drawing board's width  | `number` | -       | `true`   | -      |
| height           | Drawing board's height | `number` | -       | `true`   | -      |
| devicePixelRatio | Device pixel scale     | `number` | `1`     | `false`  | -      |

### Options Preivew

[More Demo >>](https://idrawjs.com/playground/?demo=basic-options)

<iframe class="idraw-playground-preview" 
    src="https://idrawjs.com/playground/?demo=basic-options&header=false&sider=false&default-editor-split=50" 
    width="1000" height="440" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
