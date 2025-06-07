# 布局介绍

## 什么是 iDraw.js 布局介绍？

iDraw.js 画图的内容的布局渲染，主要提供内容的一个整体背景布局和整体容器。比如内容画布的坐标起点、长度、宽度、背景色，以及内容溢出是否隐藏。

## 布局的信息

### 布局格式

```tsx
type Data = {
  elements: Element[];
  layout: {
    x: number;
    y: number;
    w: number;
    h: number;
    detail: {
      background?: string;
      overflow?: 'hidden' | 'visiable'; // default  'visiable'
    };
  };
};
```

### 布局的属性

| 属性   | 说明         | 类型     | 默认值 | 备注 |
| ------ | ------------ | -------- | ------ | ---- |
| x      | X 轴偏移量   | `number` | -      | -    |
| y      | Y 轴偏移量   | `number` | -      | -    |
| w      | 布局宽度     | `number` | -      | -    |
| h      | 布局高度     | `number` | -      | -    |
| detail | 布局描述内容 | `object` | -      | -    |

## 布局的使用

```js
import { iDraw } from 'idraw';

import { iDraw } from 'idraw';
const data = {
  elements: [
    /* ... */
  ],
  layout: {
    x: -100,
    y: -100,
    w: 800,
    h: 600,
    detail: {
      background: '#0000ff1F',
      overflow: 'hidden'
    }
  }
};

const app = document.querySelector('#app');
const idraw = new iDraw(app, {
  width: 600,
  height: 400,
  devicePixelRatio: 2
});

idraw.setData(data);
```

## 示例预览

[Demo 完整预览 Playground >>](https://idrawjs.com/playground/?demo=data-layout)

<iframe class="idraw-playground-preview" src="https://idrawjs.com/playground/?demo=data-layout&header=false&sider=false&default-editor-split=50"
      frameborder="no" border="0" 
  ></iframe>
