# resize

## 说明

`scale` 可以对图画视图进行缩放

## 参数

- `{object}` `options` 视图缩放选项
  - `{number}` `options.sacle` 缩放比例，比如 `0.5`为缩小`50%`
  - `{x: number, y: number}` `options.point` 缩放在画布上的参照位置

## 返回值

> 无返回值

## 用法

```js
import { iDraw } from 'idraw';

const app = document.querySelector('#app');
const width = 600;
const height = 400;
const options = {
  width,
  height,
  devicePixelRatio: 2
};
const idraw = new iDraw(app, options);
idraw.setData({
  element: [
    /* ... */
  ]
});

idraw.scale({
  scale: 0.5,
  point: {
    // 以画布中心为缩放参照点
    x: width / 2,
    y: height / 2
  }
});
```

## 示例

[Demo完整预览 Playground >>](https://idrawjs.com/playground/?demo=api-scale)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-scale&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
