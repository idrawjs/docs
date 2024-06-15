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
};
```

### Options 属性

| 属性             | 说明         | 类型     | 默认值 | 是否必填 | 备注 |
| ---------------- | ------------ | -------- | ------ | -------- | ---- |
| width            | 画板宽度     | `number` | -      | `true`   | -    |
| height           | 画板高度     | `number` | -      | `true`   | -    |
| devicePixelRatio | 设备像素比例 | `number` | `1`    | `false`  | -    |

### Options 效果预览

[Demo完整预览 Playground >>](https://idrawjs.com/playground/?demo=basic-options)

<iframe class="idraw-playground-preview" 
    src="https://idrawjs.com/playground/?demo=basic-options&header=false&sider=false&default-editor-split=50" 
    width="1000" height="440" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
