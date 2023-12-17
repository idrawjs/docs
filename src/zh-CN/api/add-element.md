# addElement

## 说明

`addElement` 对图画添加元素，并且触发重新渲染。

## 参数

- `{object}` `element` 元素内容，具体元素数据格式可查询 [画图元素](./../element/info.md) 。
- `{object}` `{ position?: number[] }`，可选配置，`position` 元素索引位置，比如 `[1, 2]` 代表把元素加入第2个元素（必须是`Group`类型）的第3个位置上。

## 返回值

- `{object}` 返回完整的data数据。

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
idraw.setData({ elements: [] });

idraw.addElement({
  name: 'rect',
  x: 140,
  y: 120,
  w: 200,
  h: 100,
  type: 'rect',
  detail: {
    background: '#f7d3c1',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#ff6032'
  }
});
```

## 示例

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=api-addElement)

<iframe class="idraw-playground-preview" 
  src="https://idraw.js.org/playground/?demo=api-addElement&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
