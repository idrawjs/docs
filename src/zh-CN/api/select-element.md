# selectElement

## 说明

`selectElement` 根据元素的`UUID`选中图画中的元素。

## 参数

- `{string}` `uuid` 元素唯一ID

## 返回值

> 无返回值

## 用法

```js
import { iDraw } from 'idraw';

const data = {
  elements: [
    // ....
  ]
};
const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  devicePixelRatio: 2
};
const idraw = new iDraw(app, options);
idraw.setData(data);
const resultData = idraw.getData();

idraw.selectElement(resultData.elements[0].uuid);
```

## 示例

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=api-selectElement)

<iframe class="idraw-playground-preview" 
  src="https://idraw.js.org/playground/?demo=api-selectElement&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
