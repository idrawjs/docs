# HTML元素

## HTML

用来渲染`HTML`代码片，具体格式如下所示：

```ts
type HTML = {
  type: 'html',
  x: number,
  y: number,
  w: number,
  h: number,
  angle: number,
  desc: {
    html: string,
  }
}
```

## HTML.desc 详解

元素的基本属性详情可以看 [元素介绍-数据基本格式](./info.md#数据基本格式) 。

### HTML.desc 数据格式

HTML 元素的`desc`属性

```ts
type HTMLDesc = {
  html: string,
}
```

### HTML.desc 数据属性内容


|属性|说明|类型|默认值|是否必填|备注|
|--|--|--|--|--|--|
| html | HTML代码片段 |`string`| - | `true` | - |

::: warning
注意 `desc.html` 里的 HTML代码片段暂时不支持依赖资源渲染，例如 `<img />` 标签或者 `css`的 `background-image` 属性
:::


## 完整数据示例

```js
const elementHTML = {
  name: "html",
  x: 200,
  y: 120,
  w: 150,
  h: 100,
  type: "html",
  angle: 0,
  desc: {
    html: `
      <style>
      .btn-box {
        margin: 10px 0;
      }
      .btn {
        line-height: 1.5715;
        position: relative;
        display: inline-block;
        font-weight: 400;
        white-space: nowrap;
        text-align: center;
        background-image: none;
        border: 1px solid transparent;
        box-shadow: 0 2px #00000004;
        cursor: pointer;
        user-select: none;
        height: 32px;
        padding: 4px 15px;
        font-size: 14px;
        border-radius: 2px;
        color: #000000d9;
        background: #fff;
        border-color: #d9d9d9;
      }
      .btn-primary {
        color: #fff;
        background: #1890ff;
        border-color: #1890ff;
        text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
        box-shadow: 0 2px #0000000b;
      }
      </style>
      <div>
        <div class="btn-box">
          <button class="btn">
            <span>Button</span>
          </button>
        </div>
        <div class="btn-box">
          <button class="btn btn-primary">
            <span>Button Primary</span>
          </button> 
        </div>
      </div>
    `,
  },
}
```


## 效果预览

[Demo完整预览 Playground >>](https://idraw.js.org/playground/?demo=elem-html)

<iframe 
    src="https://idraw.js.org/playground/?demo=elem-html&header=false&sider=false&default-editor-split=37" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>