# addElement

## 说明

`addElement` 对图画添加元素，并且触发重新渲染。

:::tip
`addElement` 方法使用时，当成功添加元素内容后，会触发画图的 `"changeData"`事件。
:::

## 参数

- `{object}` `element` 元素内容，具体元素数据格式可查询 [画图元素](./../element/info.md) 。

## 返回值

- `{string | null}` 如果添加元素成功，会返回 `uuid`，失败则会返回 `null`

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
idraw.setData({ elements: [] });

idraw.addElement({
  name: "rect",
  x: 140,
  y: 120,
  w: 200,
  h: 100,
  type: "rect",
  desc: {
    color: "#f7d3c1",
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#ff6032",
  },
});

```

## 示例

[Demo完整预览 Playground >>](https://idrawjs.github.io/playground/?demo=api-addElement)

<iframe 
  src="https://idrawjs.github.io/playground/?demo=api-addElement&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>