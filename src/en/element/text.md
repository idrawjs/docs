# Text

## Text

It is used to render text content. The specific type is as follows:

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

### Text.detail Properties

| Property      | Description         | Type                            | Default  | Required | Others        |
| ------------- | ------------------- | ------------------------------- | -------- | -------- | ------------- |
| text          | Text Content        | `string`                        | -        | `true`   | -             |
| color         | Font color of Text  | `string`                        | -        | `true`   | eg. `#000000` |
| fontSize      | Font size of Text   | `number`                        | `12`     | `false`  | -             |
| lineHeight    | Line height of Text | `number`                        | -        | `false`  | -             |
| fontWeight    | Font bold           | `number`                        | -        | `false`  | -             |
| fontFamily    | Font family of Text | `string`                        | -        | `false`  | -             |
| textAlign     | Text align          | `'left' \| 'center' \| 'right'` | `'left'` | `false`  | -             |
| verticalAlign | Vertical Align      | `'top' \| 'middle' \| 'bottom'` | `'top'`  | `false`  | -             |

## Complete Data Example

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

## Demo Preview

[More Demo](https://idraw.js.org/playground/?demo=elem-text)

<iframe class="idraw-playground-preview" 
    src="https://idraw.js.org/playground/?demo=elem-text&header=false&sider=false&default-editor-split=50" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
