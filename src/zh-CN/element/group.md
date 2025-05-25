# 组合元素

## Group

用来渲染组合内容，具体格式如下所示：

```ts
type Group = {
  type: 'group';
  x: number;
  y: number;
  w: number;
  h: number;
  angle: number;
  detail: {
    children: Element;
    background: string;
    borderRadius?: string;
    borderWidth?: number;
    borderColor?: number;
  };
};
```

## Group.detail 详解

元素的基本属性详情可以看 [元素介绍-数据基本格式](./info.md#数据基本格式) 。

### Group.detail 数据格式

Rect 元素的`detail`属性

```ts
type GroupDetail = {
  children: Array<Element>;
  background?: string;
  background?: string;
  borderWidth?: number;
  borderColor?: string;
};
```

### Group.detail 数据属性内容

| 属性         | 说明               | 类型             | 默认值 | 是否必填 | 备注           |
| ------------ | ------------------ | ---------------- | ------ | -------- | -------------- |
| children     | 组合子元素         | `Array<Element>` | -      | `true`   | 例如 `#000000` |
| background   | 组合矩形颜色       | `string`         | -      | `false`  | 例如 `#000000` |
| borderRadius | 组合边框角圆形半径 | `number`         | `0`    | `false`  | -              |
| borderWidth  | 组合边框宽度       | `number`         | `0`    | `false`  | -              |
| borderColor  | 组合边框颜色       | `string`         | -      | `false`  | 例如 `#000000` |

### Group.operations 操作属性内容

| 属性         | 说明               | 类型                                    | 默认值       | 是否必填 | 备注                                                                                                  |
| ------------ | ------------------ | --------------------------------------- | ------------ | -------- | ----------------------------------------------------------------------------------------------------- |
| resizeEffect | 对子元素的调整效果 | `'absolute' \| 'deepResize' \| 'fixed'` | `'absolute'` | `true`   | `'absolute'`让子元素绝对定位，`'deepResize'`让子元素尺寸跟随父元素比例，`'fixed'`让子元素固定位置不变 |

## 完整数据示例

```js
const elementGroup = {
  name: 'group',
  x: 160,
  y: 120,
  w: 200,
  h: 100,
  angle: 30,
  type: 'group',
  detail: {
    children: []
  }
};
```

## 效果预览

[Demo完整预览 Playground >>](https://idrawjs.com/playground/?demo=elem-group)

<iframe class="idraw-playground-preview" 
    src="https://idrawjs.com/playground/?demo=elem-group&header=false&sider=false&default-editor-split=50" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
