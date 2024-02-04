# getViewInfo

## 说明

`getViewInfo` 用于获取图画视图尺寸信息和图画视图缩放信息。

## 参数

> 无

## 返回值

- `{object}`
  - `viewSizeInfo` 图画视图尺寸信息
  - `viewScaleInfo` 图画视图缩放信息

## 用法

```js
import { iDraw } from 'idraw';
import data from './data';

const app = document.querySelector('#app');
const options = {
  width: 320,
  height: 320,
  devicePixelRatio: 2
};
const idraw = new iDraw(app, options);
idraw.setData(data);

console.log(idraw.getViewInfo());
```

## 示例

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=api-getViewInfo)

<iframe class="idraw-playground-preview" 
  src="https://idraw.js.org/playground/?demo=api-getViewInfo&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
