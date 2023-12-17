# moveElement

## 说明

`moveElement` 根据元素的`uuid`，将图画中对应的元素删除，并且触发重新渲染。

## 参数

- `{string}` `uuid` 元素唯一ID
- `{number[]}` `position` 将元素移动到指定索引位置。比如 `[1, 2]` 代表把元素移动到第2个元素（必须是`Group`类型）的第3个位置上。

## 返回值

> 无返回值

## 用法

```js
import { iDraw } from 'idraw';

const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  devicePixelRatio: 2
};
const data = {
  elements: [
    // ....
  ]
};
const idraw = new iDraw(app, options);
idraw.setData(data);

const uuid = idraw.getData().elements[0].uuid;

idraw.moveElement(uuid, { position: [1, 2] });
```

## 示例

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=api-deleteElement)

<iframe class="idraw-playground-preview" 
  src="https://idraw.js.org/playground/?demo=api-deleteElement&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
