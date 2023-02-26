# cancelElement

## 说明

`cancelElement` 根据元素的`UUID` 取消图画中的选中元素的状态态。

:::tip
 

## 参数

- `{string}` `uuid` 元素唯一ID


## 返回值

> 无返回值

## 用法

```js
import iDraw from 'idraw';

const data = {
  elements: [
    // ....
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

idraw.cancelElement(resultData.elements[0].uuid);
```

 