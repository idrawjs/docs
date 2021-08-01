# resetSize

## 说明

`resetSize` 可以对图画视图尺寸进行再次修改

## 参数

- `{object}` `options` 视图尺寸选项
  - `{number}` `options.width` 画板宽度，非必选 
  - `{number}` `options.height` 画板高度，非必选 
  - `{number}` `options.contextWidth` 画布宽度，非必选 
  - `{number}` `options.contextHeight` 画布高度，非必选 
  - `{number}` `options.devicePixelRatio` 设备像素比例，非必选 

## 返回值

> 无返回值

## 用法

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

## 示例

[Demo完整预览 Playground >>](https://idrawjs.github.io/playground/?demo=api-resetSize)

<iframe 
  src="https://idrawjs.github.io/playground/?demo=api-resetSize&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>