# on/off

## 说明

`on`和`off`为画板的事件的订阅和取消操作

## 参数

### on 注册事件监听 参数

- `{string}` 事件名称
- `{Function}` 事件回调函数

### off 取消事件监听 参数

- `{string}` 事件名称
- `{Function}` 事件回调函数

### 具体事件详解

|事件名称|说明|回调数据|其他|
| -- | -- | -- | -- |
| `error` | 异常事件 | `{Error}` 异常数据 | - |
| `screenSelectElement` | 视图选中元素事件 | `{object}` 选中元素的对象 | - |
| `screenMoveElementStart` | 视图移动元素开始事件 | `{object}` 选中元素的对象`uuid` 以及当前的所在画布的 `x`和`y`  | - |
| `screenMoveElementEnd` | 视图移动元素结束事件 | `{object}` 选中元素的对象`uuid` 以及当前的所在画布的 `x`和`y` | - |
| `screenChangeElement` | 视图修改元素内容事件 | `{object}` 选中元素的对象`uuid` 以及当前元素的 `x`、`y`、`width`、 `height`和`angle`数据 | - |
| `changeData` | 修改画图数据 | `{object}` 画图内容数据 | - |
| `changeScreen` | 修改画板画布视图 |`{object}` 视图变化数据  | - |



## 返回值

> 返回值

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
const idraw = new iDraw(app, options, {
  scrollWrapper: { use: true, }
});

idraw.on('changeData', (e) => {
  console.log('changeData: event = ', e);
});

idraw.setData({
  elements: [ /* ... */ ]
}, {
  triggerChangeEvent: true
});

idraw.off('changeData');
idraw.setData(data);

```

## 示例

[Demo完整预览 Playground >>](https://idrawjs.github.io/playground/?demo=api-on)

<iframe 
  src="https://idrawjs.github.io/playground/?demo=api-on&header=false&sider=false&default-editor-split=37" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>