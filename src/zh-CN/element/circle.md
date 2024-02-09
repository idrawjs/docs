# 圆形元素

## Circle

用来渲染圆形或椭圆形内容，具体格式如下所示：

```ts
type Circle = {
  type: 'circle';
  x: number;
  y: number;
  w: number;
  h: number;
  angle: number;
  detail: {
    background: string;
    borderRadius?: string;
    borderWidth?: number;
    borderColor?: number;
  };
};
```

## Circle.detail 详解

元素的基本属性详情可以看 [元素介绍-数据基本格式](./info.md#数据基本格式) 。

### Circle.detail 数据格式

Circle 元素的`detail`属性

```ts
type CircleDetail = {
  background?: string;
  background?: string;
  borderWidth?: number;
  borderColor?: string;
};
```

### Circle.detail 数据属性内容

| 属性         | 说明           | 类型     | 默认值 | 是否必填 | 备注           |
| ------------ | -------------- | -------- | ------ | -------- | -------------- |
| background   | 圆形颜色       | `string` | -      | `true`   | 例如 `#000000` |
| borderRadius | 边框角圆形半径 | `number` | `0`    | `false`  | -              |
| borderWidth  | 边框宽度       | `number` | `0`    | `false`  | -              |
| borderColor  | 边框颜色       | `string` | -      | `false`  | 例如 `#000000` |

## 完整数据示例

```js
const elementCircle = {
  name: 'circle',
  x: 160,
  y: 100,
  w: 200,
  h: 200,
  angle: 0,
  type: 'circle',
  detail: {
    background: '#d5f5f9',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#3f51b5'
  }
};
```

## 效果预览

[Demo完整预览 Playground >>](https://idrawjs.com/playground/?demo=elem-circle)

<iframe class="idraw-playground-preview" 
    src="https://idrawjs.com/playground/?demo=elem-circle&header=false&sider=false&default-editor-split=50" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
