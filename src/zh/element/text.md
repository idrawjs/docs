# 文本元素

## Text

用来渲染文字内容，具体格式如下所示：

```ts
type Text = {
  type: 'text',
  x: number,
  y: number,
  w: number,
  h: number,
  angle: number,
  desc: {
    text: string,
    color?: string,
    fontSize?: string,
    fontFamily?: string,
    textAlign?: 'left' | 'center' | 'right',
    borderRadius?: string,
    borderWidth?: number,
    borderColor?: number,
  }
}
```

## Text.desc 详解

元素的基本属性详情可以看 [元素介绍-数据基本格式](./info.md#数据基本格式) 。

### Text.desc 数据格式

Text元素的`desc`属性

```ts
type TextDesc = {
  text: string,
  color?: string,
  fontSize?: string,
  fontFamily?: string,
  textAlign?: 'left' | 'center' | 'right',
  bgColor?: string,
  borderRadius?: string,
  borderWidth?: number,
  borderColor?: string,
}
```

### Text.desc 数据属性内容


|属性|说明|类型|默认值|是否必填|备注|
|--|--|--|--|--|--|
| text | 文本内容 |`string`| - | `true` | - |
| color | 字体颜色 |`string`| - | `true` | 例如 `#000000` |
| fontSize | 字体尺寸 |`number`| `12` | `false` | - |
| fontFamily | 字体类型 |`string`| - | `false` | - |
| textAlign | 文本对齐 |`left | center | right`| `center` | `false` | - |
| bgColor | 背景颜色 |`number`| `0` | `false` | 例如 `#ffffff`  |
| borderRadius | 边框角圆形半径 |`number`| `0` | `false` | - |
| borderWidth | 边框宽度 |`number`| `0` | `false` | - |
| borderColor | 边框颜色 |`number`| `0` | `false` | 例如 `#000000`  |


## 完整数据示例

```js
const elementText = {
  name: "text",
  x: 160,
  y: 80,
  w: 200,
  h: 200,
  angle: 0,
  type: "text",
  desc: {
    text: 'Hello World',
    color: "#3f51b5",
    fontSize: 60,
    textAlign: 'center',
    bgColor: "#3f51b51f",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#3f51b5",
  },
}
```


## 效果预览

[Demo完整预览 Playground >>](https://idrawjs.github.io/playground/?demo=elem-text)

<iframe 
    src="https://idrawjs.github.io/playground/?demo=elem-text&header=false&sider=false&default-editor-split=37" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>