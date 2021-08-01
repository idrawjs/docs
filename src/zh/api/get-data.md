# getData

## 说明

`getData` 用于获取当前画图内容的数据。

## 参数

> 无参数

## 返回值

- `{object}` `data` 图画的`JSON`数据

## 用法

```js
import iDraw from 'idraw';

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
        color: "#d5f5f9",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#3f51b5",
      },
    }
  ]
}

const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4,
}
const idraw = new iDraw(app, options);
idraw.setData(data);

const resultData = idraw.getData();
console.log(resultData);
```

## 示例

[Demo完整预览 Playground >>](https://idrawjs.github.io/playground/?demo=api-getData)

<iframe 
  src="https://idrawjs.github.io/playground/?demo=api-getData&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>