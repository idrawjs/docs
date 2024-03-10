# setMode

## 说明

`setMode` 可以切换视图操作模式

## 参数

- `{IDrawType}` `mode` 视图操作模式
  - `'select'`: 选择模式，也是默认模式，用于选择和编辑元素
  - `'drag'`: 拖拽模式，用于拖拽移动整体画布位置
  - `'readOnly'`: 只读模式，仅显示视图内容，无法进行编辑操作

```ts
type IDrawMode = 'select' | 'drag' | 'readOnly';
```

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
const idraw = new iDraw(app, options);
idraw.setMode('readOnly');
```

## 示例

[Demo完整预览 Playground >>](https://idrawjs.com/playground/?demo=api-setMode)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-setMode&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
