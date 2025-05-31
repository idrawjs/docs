# on/off

## 说明

- `on` 注册监听事件
- `off` 取消监听事件

## 参数

- `{string}` `key` 事件关键字。
  - `eventKeys.CHANGE` 监听元素变化
  - `eventKeys.SCALE` 监听画布尺寸
  - `eventKeys.SELECT` 监听元素选中
  - `eventKeys.TEXT_CHANGE` 监听文本元素变化
- `{function}` `callback` 监听事件的回调函数。

## 返回值

> 无返回值

## 用法

```js
import { iDraw, eventKeys } from 'idraw';

const app = document.querySelector('#app');

const idraw = new iDraw(app, {
  // ...
});

const onChange = (e) => {
  // ...
};

idraw.on(eventKeys.CHANGE, onChange); // 监听元素变化事件

idraw.off(eventKeys.CHANGE, onChange); // 取消监听元素变化事件
```
