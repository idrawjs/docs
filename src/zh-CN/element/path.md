# 路径元素

## Path

用来渲染路径内容，具体格式如下所示：

```ts
type Path = {
  type: 'path';
  x: number;
  y: number;
  w: number;
  h: number;
  angle: number;
  detail: {
    commands: Array<{
      type: 'M' | 'm' | 'L' | 'l' | 'H' | 'h' | 'V' | 'v' | 'C' | 'c' | 'S' | 's' | 'Q' | 'q' | 'T' | 't' | 'A' | 'a' | 'Z' | 'z';
      params: number[];
    }>;
    originX: number;
    originY: number;
    originW: number;
    originH: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    strokeLineCap?: 'butt' | 'round' | 'square';
  };
};
```

## Path.detail 详解

元素的基本属性详情可以看 [元素介绍-数据基本格式](./info.md#数据基本格式) 。

### Path.detail 数据格式

Rect 元素的`detail`属性

```ts
type PathDetail = {
  commands: Array<{
    type: 'M' | 'm' | 'L' | 'l' | 'H' | 'h' | 'V' | 'v' | 'C' | 'c' | 'S' | 's' | 'Q' | 'q' | 'T' | 't' | 'A' | 'a' | 'Z' | 'z';
    params: number[];
  }>;
  originX: number;
  originY: number;
  originW: number;
  originH: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeLineCap?: 'butt' | 'round' | 'square';
};
```

### Path.detail 数据属性内容

| 属性          | 说明          | 类型                            | 默认值 | 是否必填 | 备注           |
| ------------- | ------------- | ------------------------------- | ------ | -------- | -------------- |
| fill          | 填充颜色      | `string`                        | -      | `true`   | 例如 `#000000` |
| stroke        | 路径颜色      | `string`                        | -      | `true`   | 例如 `#000000` |
| strokeWidth   | 路径宽度      | `number`                        | `0`    | `false`  | -              |
| strokeLineCap | 路径转折类型  | `'butt' \| 'round' \| 'square'` | -      | `true`   | -              |
| originX       | 路径原始X位置 | `number`                        | `0`    | `false`  | -              |
| originY       | 路径原始Y位置 | `number`                        | `0`    | `false`  | -              |
| originW       | 路径原始宽度  | `number`                        | `0`    | `false`  | -              |
| originH       | 路径原始高度  | `number`                        | `0`    | `false`  | -              |

## 完整数据示例

```js
const elementPath = {
  uuid: '41d437b8-afbd-2d3d-14bc-912e26d3491f',
  x: 100,
  y: 100,
  w: 80,
  h: 80,
  angle: 0,
  type: 'path',
  detail: {
    commands: [
      { type: 'M', params: [10, 30] },
      { type: 'A', params: [20, 20, 0, 0, 1, 50, 30] },
      { type: 'A', params: [20, 20, 0, 0, 1, 90, 30] },
      { type: 'Q', params: [90, 60, 50, 90] },
      { type: 'Q', params: [10, 60, 10, 30] },
      { type: 'z', params: [] }
    ],
    fill: '#FF00006F',
    stroke: '#000000',
    strokeWidth: 1,
    originX: 10,
    originY: 10,
    originH: 80,
    originW: 80
  }
};
```

## 效果预览

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=elem-path)

<iframe class="idraw-playground-preview" 
    src="https://idraw.js.org/playground/?demo=elem-path&header=false&sider=false&default-editor-split=50" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
