# deleteElement

## 说明

`deleteElement` 根据元素的`uuid`，将图画中对应的元素删除，并且触发重新渲染。

:::tip
`deleteElement` 方法使用时，当成功删除元素内容后，会触发画图的 `"changeData"`事件。
:::

## 参数



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
const data = {
  elements: [
    // ....
  ]
}
const idraw = new iDraw(app, options);
idraw.setData(data);

idraw.deleteElement(
  idraw.getData().elements[0].uuid
);
```

## 示例

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=api-deleteElement)

<iframe 
  src="https://idraw.js.org/playground/?demo=api-deleteElement&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>