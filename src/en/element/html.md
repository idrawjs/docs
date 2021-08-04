# HTML

## HTML

It is used to render HTML code snippet. The specific type is as follows:


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

## HTML.desc

The basic attribute details of the element can be viewed [Element's Detail
#](./info.md#element-s-detail).

### HTML.desc Data-Type

The Data-Type of `HTML.desc`

```ts
type HTMLDesc = {
  html: string,
}
```

### HTML.desc Properties


|Property|Description|Type|Default|Required|Others|
|--|--|--|--|--|--|
| html | HTML code snippet |`string`| - | `true` | HTML代码片段 |


## Complete Data Example

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


## Demo Preview

[More Demo >>](https://idrawjs.github.io/playground/?demo=elem-html)

<iframe 
    src="https://idrawjs.github.io/playground/?demo=elem-html&header=false&sider=false&default-editor-split=37" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>