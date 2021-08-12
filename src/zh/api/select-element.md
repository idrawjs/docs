# selectElement

## 说明

`selectElement` 根据元素的`UUID`选中图画中的元素。

:::tip
`selectElement` 方法使用时，当成功选中了元素后，会触发画图的 `"screenSelectElement"`事件。
:::

## 参数

- `{string}` `uuid` 元素唯一ID

:::tip
元素在画图时候，例如通过 `setData`和`addElement` 操作时候，如果无`uuid`，会自动生成和补全 新增元素的`uuid`
:::

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

idraw.selectElement(resultData.elements[0].uuid);
```

## 示例

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=api-selectElement)

<iframe 
  src="https://idraw.js.org/playground/?demo=api-selectElement&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>