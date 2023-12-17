# 文本元素

## Text

用来渲染文字内容，具体格式如下所示：

```ts
type Text = {
  type: 'text';
  x: number;
  y: number;
  w: number;
  h: number;
  angle: number;
  detail: {
    text: string;
    color?: string;
    fontSize?: string;
    fontFamily?: string;
    textAlign?: 'left' | 'center' | 'right';
  };
};
```

## Text.detail 详解

元素的基本属性详情可以看 [元素介绍-数据基本格式](./info.md#数据基本格式) 。

### Text.detail 数据格式

Text元素的`detail`属性

```ts
type TextDetail = {
  text: string;
  color?: string;
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: 'bold' | string | number;
  fontFamily?: string;
  textAlign?: 'center' | 'left' | 'right';
  verticalAlign?: 'middle' | 'top' | 'bottom';
};
```

### Text.detail 数据属性内容

| 属性          | 说明     | 类型                            | 默认值   | 是否必填 | 备注           |
| ------------- | -------- | ------------------------------- | -------- | -------- | -------------- |
| text          | 文本内容 | `string`                        | -        | `true`   | -              |
| color         | 字体颜色 | `string`                        | -        | `true`   | 例如 `#000000` |
| fontSize      | 字体尺寸 | `number`                        | `12`     | `false`  | -              |
| lineHeight    | 文本行高 | `number`                        | -        | `false`  | -              |
| fontWeight    | 字体粗细 | `number`                        | -        | `false`  | -              |
| fontFamily    | 字体类型 | `string`                        | -        | `false`  | -              |
| textAlign     | 水平对齐 | `'left' \| 'center' \| 'right'` | `'left'` | `false`  | -              |
| verticalAlign | 垂直对齐 | `'top' \| 'middle' \| 'bottom'` | `'top'`  | `false`  | -              |

## 完整数据示例

```js
const elementText = {
  name: 'text',
  x: 160,
  y: 80,
  w: 200,
  h: 200,
  angle: 0,
  type: 'text',
  detail: {
    text: 'Hello World',
    color: '#3f51b5',
    fontSize: 60,
    textAlign: 'center',
    background: '#3f51b51f',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#3f51b5'
  }
};
```

## 效果预览

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=elem-text)

<iframe class="idraw-playground-preview" 
    src="https://idraw.js.org/playground/?demo=elem-text&header=false&sider=false&default-editor-split=50" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
