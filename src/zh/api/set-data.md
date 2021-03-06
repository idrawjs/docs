# setData

## 说明

`setData` 用于设置画图内容的数据，设置后会根据设置数据触发图画的重绘。

## 参数

- `{object}` `data` 画图数据对象
- `{object}` `options` 设置数据选项
  - `{boolean}` `options.triggerChangeEvent` 是否触发数据变化事件

:::tip
如果设置了 `options.triggerChangeEvent = true`，在 `idraw.on('changeData', (e) => { })` 中会监听到 `"changeData"` 事件，并且在事件的回调参数会传入最新变化的 `data` 数据。
:::

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
    {
      name: "rect",
      x: 160,
      y: 120,
      w: 200,
      h: 100,
      angle: 30,
      type: "rect",
      desc: {
        bgColor: "#d5f5f9",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#3f51b5",
      },
    }
  ]
}
idraw.setData(data);
```

## 示例

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=api-setData)

<iframe 
    src="https://idraw.js.org/playground/?demo=api-setData&header=false&sider=false&default-editor-split=37" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>