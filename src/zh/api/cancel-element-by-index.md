# cancelElementByIndex

## 说明

`cancelElementByIndex` 根据元素在`data.elements`中的索引位置，来取消选中的元素。
 
## 参数

- `{number}` `index` 元素在 `data.elements`中的索引位置。


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

idraw.cancelElementByIndex(0);
```

 