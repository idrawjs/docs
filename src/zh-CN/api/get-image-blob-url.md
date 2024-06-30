# getImageBlobURL

## 说明

`getImageBlobURL` 从画布中导出图像内容，把画布内容提取到内存`Blob`里，并生成图片的`blobURL`

## 参数

- `{object}` `options` 导出图像的配置选项
  - `{number}` `options.devicePixelRatio` 设备像素比例，默认为 `1`

## 返回值

- `{Promise<object>}` 返回完整的画布图像数据
  - `{string}` `blobURL` 画布图像在内存中的`Blob`链接
  - `{number}` `width` 导出图像逻辑像素的宽度
  - `{number}` `height` 导出图像逻辑像素的高度
  - `{number}` `devicePixelRatio` 导出图像的设备像素比例

## 用法

```js
import { iDraw } from 'idraw';

const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  devicePixelRatio: 2
};
const idraw = new iDraw(app, options);

const { blobURL } = await idraw.getImageBlobURL({ devicePixelRatio: 1 });
```

## 示例

[Demo完整预览 Playground >>](https://idrawjs.com/playground/?demo=api-getImageBlobURL)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-getImageBlobURL&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
