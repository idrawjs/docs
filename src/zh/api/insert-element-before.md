# insertElementBefore

## 说明

`insertElementBefore`  根据某个元素 `uuid`，在图画的元素数组里某个元素位置前面添加元素，并且触发重新渲染。

:::tip
`insertElementBefore` 方法使用时，当成功添加元素内容后，会触发画图的 `"changeData"`事件。
:::

## 参数

- `{object}` `element` 元素内容，具体元素数据格式可查询 [画图元素](./../element/info.md) 。
- `{string}` `uuid` 在元素数组中，即将插入位置的后面元素的 `uuid`。

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

idraw.insertElementBefore({
  name: "rect-xxx",
  x: 140,
  y: 120,
  w: 200,
  h: 100,
  type: "rect",
  desc: {
    bgColor: "#f7d3c1",
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#ff6032",
  },
}, idraw.getData().elements[2].uuid);

```

## 示例

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=api-insertElementBefore)

<iframe 
  src="https://idraw.js.org/playground/?demo=api-insertElementBefore&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>