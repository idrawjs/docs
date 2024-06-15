# 图片元素

## Image

用来渲染图片内容，具体格式如下所示：

```ts
type Image = {
  type: 'image';
  x: number;
  y: number;
  w: number;
  h: number;
  angle: number;
  detail: {
    src: string;
  };
};
```

## Image.detail 详解

元素的基本属性详情可以看 [元素介绍-数据基本格式](./info.md#数据基本格式) 。

### Image.detail 数据格式

Image元素的`detail`属性

```ts
type ImageDetail = {
  src: string;
};
```

### Image.detail 数据属性内容

| 属性 | 说明       | 类型     | 默认值 | 是否必填 | 备注                       |
| ---- | ---------- | -------- | ------ | -------- | -------------------------- |
| src  | 图片数据源 | `string` | -      | `true`   | 可以是图片链接或图片Base64 |

## 完整数据示例

```js
const elementImage = {
  name: 'image',
  x: 160,
  y: 100,
  w: 200,
  h: 200,
  angle: 0,
  type: 'image',
  detail: {
    src: './image/github.png'
  }
};
```

## 效果预览

[Demo完整预览 Playground >>](https://idrawjs.com/playground/?demo=elem-image)

<iframe class="idraw-playground-preview" 
    src="https://idrawjs.com/playground/?demo=elem-image&header=false&sider=false&default-editor-split=50" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
