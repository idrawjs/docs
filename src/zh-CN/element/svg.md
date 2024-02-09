# SVG元素

## SVG

用来渲染`SVG`代码片，具体格式如下所示：

```ts
type SVG = {
  type: 'svg';
  x: number;
  y: number;
  w: number;
  h: number;
  angle: number;
  detail: {
    svg: string;
  };
};
```

## SVG.detail 详解

元素的基本属性详情可以看 [元素介绍-数据基本格式](./info.md#数据基本格式) 。

### SVG.detail 数据格式

SVG 元素的`detail`属性

```ts
type SVGDetail = {
  svg: string;
};
```

### SVG.detail 数据属性内容

| 属性 | 说明        | 类型     | 默认值 | 是否必填 | 备注 |
| ---- | ----------- | -------- | ------ | -------- | ---- |
| svg  | SVG代码片段 | `string` | -      | `true`   | -    |

## 完整数据示例

```js
const elementSVG = {
  name: 'svg',
  x: 160,
  y: 100,
  w: 200,
  h: 200,
  angle: 0,
  type: 'svg',
  detail: {
    svg: `<svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="400" height="400"><path d="M512 1013.76c-277.11488 0-501.76-224.64512-501.76-501.76S234.88512 10.24 512 10.24s501.76 224.64512 501.76 501.76-224.64512 501.76-501.76 501.76z m0-51.02592c248.9344 0 450.73408-201.79968 450.73408-450.73408 0-248.9344-201.79968-450.73408-450.73408-450.73408-248.9344 0-450.73408 201.79968-450.73408 450.73408 0 248.9344 201.79968 450.73408 450.73408 450.73408zM456.9856 637.9008l295.45984-339.94752a26.4192 26.4192 0 0 1 37.59616-2.31936 28.32896 28.32896 0 0 1 3.10784 38.8608l-307.01568 380.38016a30.72 30.72 0 0 1-42.90048 4.84864L235.44832 556.2368a32.128 32.128 0 0 1-5.74976-44.6464 32.1536 32.1536 0 0 1 44.544-6.58944l182.74304 132.90496z" fill="#1890ff"></path></svg>`
  }
};
```

## 效果预览

[Demo完整预览 Playground >>](https://idrawjs.com/playground/?demo=elem-svg)

<iframe class="idraw-playground-preview" 
    src="https://idrawjs.com/playground/?demo=elem-svg&header=false&sider=false&default-editor-split=50" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
