# deleteElement

## 说明

`deleteElement` 根据元素的`uuid`，将图画中对应的元素删除，并且触发重新渲染。

## 参数

- `{string}` `uuid` 元素唯一ID

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

idraw.deleteElement(uuid);
```

## 示例

[Demo完整预览 Playground >>](https://idrawjs.com/playground/?demo=api-deleteElement)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-deleteElement&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
