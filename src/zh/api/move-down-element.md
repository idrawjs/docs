# moveDownElement

## 说明

`moveDownElement` 是将图画中的元素降低索引`index`位置，并且触发重新渲染。

:::tip
`moveDownElement` 方法使用时，当成功修改元素索引`index`位置后，会触发画图的 `"changeData"`事件。
:::

## 参数

- `{string}` `uuid` 元素唯一ID

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
const idraw = new iDraw(app, options);

const data = {
  elements: [
    // ....
  ]
}
idraw.setData(data);

idraw.moveDownElement(
  idraw.getData().elements[1].uuid
);
```

## 示例

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=api-moveDownElement)

<iframe 
  src="https://idraw.js.org/playground/?demo=api-moveDownElement&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>