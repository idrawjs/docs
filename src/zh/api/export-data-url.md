# exportDataURL

## 说明

`exportDataURL` 用于导出当前画布的图片的`base64`字符串

## 参数

- `{string}` `type` 输出图片类型 `'image/png'` | `'image/jpeg'` 两个选择。
- `{number}` `quality` 图片质量，范围为 0~1。


## 返回值

- `{string}` `dataURL` 图画的`base64`图片数据

## 用法

```js
import iDraw from 'idraw';

const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4,
}
const idraw = new iDraw(app, options);
const data = {
  elements: [
    {
      name: "rect",
      x: 160,
      y: 120,
      w: 200,
      h: 100,
      angle: 30,
      type: "rect",
      desc: {
        bgColor: "#d5f5f9",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#3f51b5",
      },
    }
  ]
}
idraw.setData(data);

const dataURL = idraw.exportDataURL('image/png', 1);
```