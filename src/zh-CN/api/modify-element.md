# modifyElement

## 说明

`modifyElement` 修改图画中的元素，并且触发重新渲染。

## 参数

- `{object}` `element` 元素内容，具体元素数据格式可查询 [画图元素](./../element/info.md) 。

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

// ...

idraw.modifyElement({
  uuid: 'xxxxx',
  detail: {
    background: '#f0f0f0'
  }
});
```

## 示例

[Demo完整预览 Playground >>](https://idrawjs.com/playground/?demo=api-modifyElement)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-modifyElement&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
