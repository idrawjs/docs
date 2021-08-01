# selectElementByIndex

## 说明

`selectElementByIndex` 根据元素在`data.elements`中的索引位置，来选中元素。

:::tip
`selectElementByIndex` 方法使用时，当成功选中了元素后，会触发画图的 `"screenSelectElement"`事件。
:::

## 参数

- `{number}` `index` 元素在 `data.elements`中的索引位置。


## 返回值

> 无返回值

## 用法

```js
import iDraw from 'idraw';

const data = {
  elements: [
    // ....
  ]
}
const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4,
}
const idraw = new iDraw(app, options);
idraw.setData(data);
const resultData = idraw.getData();

idraw.selectElementByIndex(0);
```

## 示例

[Demo完整预览 Playground >>](https://idrawjs.github.io/playground/?demo=api-selectElementByIndex)

<iframe 
  src="https://idrawjs.github.io/playground/?demo=api-selectElementByIndex&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>