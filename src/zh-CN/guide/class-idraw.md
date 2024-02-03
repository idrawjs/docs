# iDraw 类

## 参数

```js
import { iDraw } from 'idraw';
const dom = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  devicePixelRatio: 2
};

const idraw = new iDraw(dom, options);
```

在使用 `new iDraw(dom, options)` 类时，会接收两个参数。参数信息有下：

| 参数    | 说明         | 类型                    | 默认值 | 是否必填 | 备注 |
| ------- | ------------ | ----------------------- | ------ | -------- | ---- |
| dom     | 渲染DOM节点  | `HTMLDivElement`        | -      | `true`   | -    |
| options | 渲染内容选项 | [Object](#选项-options) | -      | `true`   | -    |

## 选项 Options

```ts
type Options = {
  width: number;
  height: number;
  devicePixelRatio: number;
  enableScroll?: boolean;
  enableSelect?: boolean;
  enableScale?: boolean;
  enableRuler?: boolean;
  enableTextEdit?: boolean;
  enableDrag?: boolean;
};
```

### Options 属性

| 属性             | 说明                                 | 类型      | 默认值  | 是否必填 | 备注 |
| ---------------- | ------------------------------------ | --------- | ------- | -------- | ---- |
| width            | 画板宽度                             | `number`  | -       | `true`   | -    |
| height           | 画板高度                             | `number`  | -       | `true`   | -    |
| devicePixelRatio | 设备像素比例                         | `number`  | `1`     | `false`  | -    |
| enableScroll     | 启用视图滚动                         | `boolean` | `true`  | `false`  | -    |
| enableSelect     | 启用元素选择（和`enableDrag`互斥）   | `boolean` | `true`  | `false`  | -    |
| enableScale      | 启用视图缩放                         | `boolean` | `true`  | `false`  | -    |
| enableRuler      | 启用视图标尺                         | `boolean` | `true`  | `false`  | -    |
| enableTextEdit   | 启用文本编辑                         | `boolean` | `true`  | `false`  | -    |
| enableDrag       | 启用视图拖拽（和`enableSelect`互斥） | `boolean` | `false` | `false`  | -    |

### Options 效果预览

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=basic-options)

<iframe class="idraw-playground-preview" 
    src="https://idraw.js.org/playground/?demo=basic-options&header=false&sider=false&default-editor-split=50" 
    width="1000" height="440" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
