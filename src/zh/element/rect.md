# 矩形元素

## Rectangle

用来渲染矩形内容，具体格式如下所示：

```ts
type Rect = {
  type: 'rect',
  x: number,
  y: number,
  w: number,
  h: number,
  angle: number,
  desc: {
    color: string,
    borderRadius?: string,
    borderWidth?: number,
    borderColor?: number,
  }
}
```

## Rect.desc 详解

元素的基本属性详情可以看 [元素介绍-数据基本格式](./info.md#数据基本格式) 。

### Rect.desc 数据格式

Text元素的`desc`属性

```ts
type RectDesc = {
  color?: string,
  bgColor?: string,
  borderWidth?: number,
  borderColor?: string,
}
```

### Text.desc 数据属性内容


|属性|说明|类型|默认值|是否必填|备注|
|--|--|--|--|--|--|
| color | 矩形颜色 |`string`| - | `true` | 例如 `#000000` |
| borderRadius | 边框角圆形半径 |`number`| `0` | `false` | - |
| borderWidth | 边框宽度 |`number`| `0` | `false` | - |
| borderColor | 边框颜色 |`number`| `0` | `false` | 例如 `#000000`  |


## 完整数据示例

```js
const elementText = {
  name: "rect",
  x: 160,
  y: 120,
  w: 200,
  h: 100,
  angle: 30,
  type: "rect",
  desc: {
    color: "#d5f5f9",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#3f51b5",
  },
}
```


## 效果预览

[Demo完整预览 Playground >>](https://idrawjs.github.io/playground/?demo=elem-rect)

<iframe 
    src="https://idrawjs.github.io/playground/?demo=elem-rect&header=false&sider=false&default-editor-split=37" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>