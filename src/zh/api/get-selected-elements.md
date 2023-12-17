# getSelectedElements

## 说明

`getSelectedElements` 读取被选中的元素数组

## 参数

无

## 返回值

- `{TypeElement}[]` 选中元素的数组

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
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4
};
const idraw = new iDraw(app, options);
idraw.setData(data);
const resultData = idraw.getData();
idraw.selectElement(resultData.elements[0].uuid);

const elems = idraw.getSelectedElements();
```

## 示例

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=api-getSelectedElements)

<iframe class="idraw-playground-preview" 
  src="https://idraw.js.org/playground/?demo=api-getSelectedElements&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
