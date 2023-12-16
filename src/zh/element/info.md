# 画图元素介绍

## 什么是 iDraw.js 画图元素？

iDraw.js 画图的内容都是基于“元素”构成的，画图的过程基本是围绕处理元素的位置、样式、内容等属性来实现画图的功能。

目前支持的有六种元素：

1. [Text 文本](./text.md)
2. [Rect 矩形](./rect.md)
3. [Circle 圆形](./circle.md)
4. [Image 图片](./image.md)
5. [SVG](./svg.md)
6. [HTML](./html.md)
7. [Path 路径](./path.md)
8. [Group 组合](./group.md)

## 画图元素的信息

### 数据基本格式

```tsx
type Element = {
  type: 'text' | 'rect' | 'circle' | 'image' | 'svg' | 'html' | 'path' | 'group';
  uuid: string;
  name?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  angle?: number;
  detail: any; // 不同元素的描述内容不一样
  // operations 为元素操控配置
  operations?: {
    lock?: boolean;
    invisible?: boolean;
    limitRatio?: boolean;
  };
  extension?: { [key: string]: any } | any;
};
```

### 元素的基本属性

| 属性                  | 说明                 | 类型                                     | 默认值  | 备注                                   |
| --------------------- | -------------------- | ---------------------------------------- | ------- | -------------------------------------- |
| type                  | 元素类型             | `text\| rect\|circle\|image\|svg\| html` | -       | -                                      |
| uuid                  | 唯一 ID              | `string`                                 | -       | iDraw.js 内部会自动添加                |
| name                  | 名称                 | `string`                                 | -       | -                                      |
| x                     | X 轴偏移量           | `number`                                 | -       | -                                      |
| y                     | Y 轴偏移量           | `number`                                 | -       | -                                      |
| w                     | 元素宽度             | `number`                                 | -       | -                                      |
| h                     | 元素高度             | `number`                                 | -       | -                                      |
| angle                 | 元素旋转角度         | `number`                                 | `0`     | `[0, 360]`                             |
| detail                | 元素描述内容         | `object` (详情请查看各元素描述内容)      | -       | -                                      |
| operations.lock       | 元素是否锁住         | `boolean`                                | `false` | 元素锁住后就不能进行视图操作           |
| operations.invisible  | 元素是否不可见       | `boolean`                                | `false` | 元素不可见就不会渲染                   |
| operations.limitRatio | 元素是否限制宽高比例 | `boolean`                                | -       | 在元素缩放时候，按照其宽高比例进行缩放 |

## 画图元素的使用

```js
import iDraw from 'idraw';

import iDraw from 'idraw';
const data = {
  elements: [
    {
      type: 'text',
      name: 'rect-001',
      x: 50,
      y: 50,
      w: 200,
      h: 200,
      angle: 0,
      detail: {
        text: 'Hello World',
        color: '#3f51b5',
        fontSize: 60,
        textAlign: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3f51b5'
      }
    }
  ]
};

const app = document.querySelector('#app');
const idraw = new iDraw(app, {
  width: 600,
  height: 400,
  devicePixelRatio: 2
});

// 设置元素数据，渲染画图内容
idraw.setData(data);
```

## 示例预览

[Demo 完整预览 Playground >>](https://idraw.js.org/playground/?demo=elem-rect)

<iframe class="idraw-playground-preview" src="https://idraw.js.org/playground/?demo=elem-rect&header=false&sider=false&default-editor-split=50"
      frameborder="no" border="0" 
  ></iframe>
