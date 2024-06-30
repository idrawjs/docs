# enable/disable

## 说明

- `enable(...)` 开启某个功能
- `disable(...)` 关闭某个功能

## 参数

- `{IDrawFeature}` `feat` 功能类型
  - `'ruler'`: 标尺功能
  - `'scroll'`: 滚动条功能
  - `'scale'`: 缩放功能
  - `'info'`: 信息显示功能，例如显示坐标信息
  - `'selectInGroup'`: 在组合中选择元素
  - `'snapToGrid'`: 对其到网格和辅助线
  - `-` 其它功能待开发 ...

```ts
type IDrawFeature = 'ruler' | 'scroll' | 'scale' | 'info' | 'selectInGroup' | 'snapToGrid'; // TODO other feature
```

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
const idraw = new iDraw(app, options);
idraw.setData(data);
idraw.disable('ruler');

setTimeout(() => {
  idraw.enable('ruler');
}, 1000);
```

## 示例

[Demo完整预览 Playground >>](https://idrawjs.com/playground/?demo=api-enable)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-enable&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
