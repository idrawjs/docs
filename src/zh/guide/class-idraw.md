# iDraw 类

## 参数

```js
import iDraw from 'idraw';
const dom = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  devicePixelRatio: 2
};
const config = {
  scrollWrapper: {
    use: true
  }
};

const idraw = new iDraw(dom, options, config);
```

在使用 `new iDraw(dom, options, config)` 类时，会接收三个参数。参数信息有下：

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
  disableScroll?: boolean;
  disableSelect?: boolean;
  disableScale?: boolean;
  disableRuler?: boolean;
  disableTextEdit?: boolean;
};
```

### Options 属性

| 属性             | 说明         | 类型      | 默认值  | 是否必填 | 备注 |
| ---------------- | ------------ | --------- | ------- | -------- | ---- |
| width            | 画板宽度     | `number`  | -       | `true`   | -    |
| height           | 画板高度     | `number`  | -       | `true`   | -    |
| devicePixelRatio | 设备像素比例 | `number`  | `1`     | `false`  | -    |
| disableScroll    | 禁用滚动     | `boolean` | `false` | `false`  | -    |
| disableSelect    | 禁用选择     | `boolean` | `false` | `false`  | -    |
| disableScale     | 禁用缩放     | `boolean` | `false` | `false`  | -    |
| disableRuler     | 禁用标尺     | `boolean` | `false` | `false`  | -    |
| disableTextEdit  | 禁用文本编辑 | `boolean` | `false` | `false`  | -    |

### Options 效果预览

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=options)

<iframe class="idraw-playground-preview" 
    src="https://idraw.js.org/playground/?demo=options&header=false&sider=false&default-editor-split=50" 
    width="1000" height="440" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
