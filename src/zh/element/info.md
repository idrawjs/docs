# 画图元素介绍

## 什么是iDraw.js画图元素？

iDraw.js 画图的内容都是基于“元素”构成的，画图的过程基本是围绕处理元素的位置、样式、内容等属性来实现画图的功能。

目前支持的有六种元素：

1. [Text 文本](./text.md) 
2. [Rect 矩形](./rect.md) 
3. [Circle 圆形](./circle.md) 
4. [Image 图片](./image.md) 
5. [SVG](./svg.md) 
6. [HTML](./html.md) 

## 画图元素的信息

### 数据基本格式

```ts
type Element = {
  type: 'text' | 'rect' | 'circle' | 'image' | 'svg' | 'html',
  uuid?: string,
  name?: string,
  x: number,
  y: number,
  w: number,
  h: number,
  angle?: number,
  desc: any, // 不同元素的描述内容不一样
  // operation 为元素操控配置
  operation?: {
    lock?: boolean, 
    invisible?: boolean,
    disableScale?: boolean,
    disableRotate?: boolean,
  }
  extension?: {[key: string]: any} | any;
}
```

### 元素的基本属性

|属性|说明|类型|默认值|是否必填|备注|
|--|--|--|--|--|--|
| type | 元素类型 |` text | rect | circle | image | svg | html `| - | `true` | - |
| uuid | 唯一ID |`string`| - | `false` | iDraw.js 内部会自动添加 |
| name | 名称 |`string`| - | `false` | - |
| x | X轴偏移量 |`number`| - | `true` | - |
| y | Y轴偏移量 |`number`| - | `true` | - |
| w | 元素宽度 |`number`| - | `true` | - |
| h | 元素高度 |`number`| - | `true` | - |
| angle | 元素旋转角度 |`number`| `0` | `false` | `[0, 360]` |
| desc | 元素描述内容 |`object` (详情请查看各元素描述内容) | - | `true` | - |
| operation.lock | 元素是否锁住 |`boolean`| `false` | `false` | 元素锁住后就不能进行视图操作 |
| operation.invisible | 元素是否不可见 |`boolean`| `false` | `false` | 元素不可见就不会渲染 |
| operation.disableScale | 元素是否禁用缩放 |`boolean`| - | `false` | 元素禁用缩放，就不显示缩放的控制点 |
| operation.disableRotate | 元素是否禁用旋转 |`boolean`| - | `false` | 元素禁用缩放，就不显示旋转的控制点 |
| extension | 拓展属性 |`{[key: string]: any} | any`| - | `false` | 用于自定义的拓展声明 |

## 画图元素的使用

```js
import iDraw from 'idraw';

import iDraw from 'idraw';
const data = {
  elements: [
    {
      type: "text",
      name: "rect-001",
      x: 160,
      y: 80,
      w: 200,
      h: 200,
      angle: 0,
      desc: {
        text: 'Hello World',
        color: "#3f51b5",
        fontSize: 60,
        textAlign: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#3f51b5",
      },
    },
  ],
}

const app = document.querySelector('#app');
const idraw = new iDraw(app, {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4,
});

// 设置元素数据，渲染画图内容
idraw.setData(data);
```

## 示例预览

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=elem-rect)

<iframe 
    src="https://idraw.js.org/playground/?demo=elem-rect&header=false&sider=false&default-editor-split=37" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
