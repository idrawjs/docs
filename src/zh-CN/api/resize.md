# resize

## 说明

`resize` 可以对图画视图尺寸进行再次修改

## 参数

- `{object}` `options` 视图尺寸选项
  - `{number}` `options.width` 画板宽度，非必选
  - `{number}` `options.height` 画板高度，非必选
  - `{number}` `options.devicePixelRatio` 设备像素比例，非必选

## 返回值

> 无返回值

## 用法

```js
import { iDraw } from 'idraw';

const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  devicePixelRatio: 2
};
const idraw = new iDraw(app, options);
idraw.setData({
  element: [
    /* ... */
  ]
});

idraw.resize({
  width: 300,
  height: 200,
  devicePixelRatio: 2
});
```

## 示例

[Demo完整预览 Playground >>](https://idrawjs.com/playground/?demo=api-resize)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-resize&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
