# centerContent

## 说明

`centerContent` 让内容在视图居中显示，如果内容尺寸超出视图，就会把内容按比例缩小居中在视图中。

## 参数

- `{object} options`
  - `{Data}` `options.data` 可选，计算居中尺寸的新内容数据。

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
const idraw = new iDraw(app, options, {
  scrollWrapper: { use: true }
});
idraw.setData({
  element: [
    /* ... */
  ]
});

idraw.centerContent();
```

## 示例

[Demo完整预览 Playground >>](https://idrawjs.com/playground/?demo=api-centerContent)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-centerContent&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
