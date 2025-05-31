# undo/redo

## 说明

- `undo` 撤销
- `redo` 重做

## 参数

> 无参数

## 返回值

> 无返回值

## 用法

```js
import { iDraw } from 'idraw';

const app = document.querySelector('#app');

const idraw = new iDraw(app, {
  // ...
  history: true // 开启历史记录，非必选，默认false
  historyLimit: true // 历史记录的限制数，非必选，默认100
});

idraw.undo() // 撤销

idraw.redo() // 重做
```
