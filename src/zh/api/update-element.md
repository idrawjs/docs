# updateElement

## 说明

`updateElement` 更新图画中的元素，并且触发重新渲染。

:::tip
`updateElement` 方法使用时，当成功更新元素内容后，会触发画图的 `"changeData"`事件。
:::


## 参数

- `{object}` `element` 元素内容，具体元素数据格式可查询 [画图元素](./../element/info.md) 。

:::tip
这里的元素内容数据，必须包含元素真实的 `uuid`
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

resultData.elements[0].desc.color = '#f0f0f0';

idraw.updateData(resultData.elements[0]);
```

## 示例

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=api-updateElement)

<iframe 
  src="https://idraw.js.org/playground/?demo=api-updateElement&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>