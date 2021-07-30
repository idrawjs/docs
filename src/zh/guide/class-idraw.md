# iDraw 类

## 参数

```js
import iDraw from 'idraw';
const dom = document.querySelector('#app');

const idraw = new iDraw(dom, {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4,
});
```

在使用 `new iDraw(dom, options, config)` 类时，会接收三个参数。参数信息有下：

|参数|说明|类型|默认值|是否必填|备注|
|--|--|--|--|--|--|
|dom| 渲染DOM节点 |`HTMLDivElement`| - |`true`| - |
|options| 渲染内容选项 |[Object](#选项-options)| - |`true`| - |
|config| 渲染配置 |[Object](#配置-configuration)| - |`false`| - |


## 选项 Options

```ts
type Options = {
  width: number,
  height: number,
  contextWidth: number,
  contextHeight: number,
  devicePixelRatio: number,
  onlyRender: boolean,
  maxRecords: number,
}
```

### Options 属性

|属性|说明|类型|默认值|是否必填|备注|
|--|--|--|--|--|--|
| width | 画板宽度 |`number`| - |`true`| - |
| height | 画板高度 |`number`| - |`true`| - |
| contextWidth | 画布宽度 |`number`| - |`true`| - |
| contextHeight | 画布宽度 |`number`| - |`true`| - |
| devicePixelRatio | 设备像素比例 |`number`| `1` |`false`| - |
| onlyRender | 是否只渲染 | `boolean` | `false` |`false`| - |
| maxRecords | 最大操作记录 | `number` | `10` |`false`|用于“撤销”与“重写”操作|


### Options 效果预览

[Demo完整预览 Playground >>](https://idrawjs.github.io/playground/?demo=options)

<iframe 
    src="https://idrawjs.github.io/playground/?demo=options&header=false&sider=false&default-editor-split=37" 
    width="1000" height="440" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>


## 配置 Configuration

```ts
type Config = {
  elementWrapper: {
    color: string,
    dotSize: number,
    lineWidth: number,
    lineDash: number[],
  },
  scrollWrapper?: {
    use: boolean,
    color: string,
    lineWidth: number,
  }
}
```

### Config 属性

|属性|说明|类型|默认值|是否必填|备注|
|--|--|--|--|--|--|
| elementWrapper | 自定义元素封装 |[object](#config-elementwrapper-属性)| - |`false`| - |
| scrollWrapper | 自定义滚动条封装 |[object](#config-scrollwrapper-属性)| - |`false`| - |

#### Config.elementWrapper 属性

|属性|说明|类型|默认值|是否必填|备注|
|--|--|--|--|--|--|
| color | 元素操作颜色 |`string`| `#2ab6f1` | `false` | - |
| lockColor | 元素禁用颜色 |`string`| `#aaaaaa` | `false` | - |
| dotSize | 操作点尺寸 |`number`| `8` | `false` | - |
| lineWidth | 元素操作线条宽度 |`number`| `1` | `false` | - |
| lineDash | 元素操作线条虚线尺寸 |`number[]`| `[4, 3]` | `false` | - |

#### Config.scrollWrapper 属性

|属性|说明|类型|默认值|是否必填|备注|
|--|--|--|--|--|--|
| use | 是否使用滚动条 |`boolean`| `false` | `false` | - |
| color | 滚动框颜色 |`string`| `-` | `false` | - |
| lineWidth | 滚动框宽度 |`number`| `1` | `false` | - |

### Config 效果预览

[Demo完整预览 Playground >>](https://idrawjs.github.io/playground/?demo=config)

<iframe 
    src="https://idrawjs.github.io/playground/?demo=config&header=false&sider=false&default-editor-split=37" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>