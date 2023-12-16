# scale

## 说明

`scale` 对画布进行缩放

## 参数

- `{number}` `scale` 画布缩放比例

## 返回值

- `{object}` `screenInfo` 画板视图信息
  - `{object}` `screenInfo.size` 画布尺寸信息
    - `{number}` `screenInfo.size.x` 画布起始点在画板X轴位置
    - `{number}` `screenInfo.size.y` 画布起始点在画板Y轴位置
    - `{number}` `screenInfo.size.w` 画布缩放后的宽度
    - `{number}` `screenInfo.size.h` 画布缩放后的高度
  - `{object}` `screenInfo.position` 画布在画板中位置信息
    - `{number}` `screenInfo.position.top` 画布在距离画板顶部位置距离
    - `{number}` `screenInfo.position.bottom` 画布在距离画板滴部位置距离
    - `{number}` `screenInfo.position.left` 画布在距离画板左边位置距离
    - `{number}` `screenInfo.position.right` 画布在距离画板右边位置距离

```ts
{
  size: {
    x: number;
    y: number;
    w: number;
    h: number;
  },
  position: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  }
}
```

## 用法

```js
import iDraw from 'idraw';
const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4
};
const idraw = new iDraw(app, options, {
  scrollWrapper: { use: true }
});
idraw.setData({
  elements: [
    /* ... */
  ]
});

idraw.scale(2);
```

## 示例

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=api-scale)

<iframe class="idraw-playground-preview" 
  src="https://idraw.js.org/playground/?demo=api-scale&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
