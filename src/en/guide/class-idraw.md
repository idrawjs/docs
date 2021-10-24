# Class iDraw

## Arguments

```js
import iDraw from 'idraw';
const dom = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4,
}
const config = {
  scrollWrapper: {
    use: true,
  }
}

const idraw = new iDraw(dom, options, config);
```

|Arugment|Description|Type|Default|Required|Others|
|--|--|--|--|--|--|
|dom| Canvas mounted DOM |`HTMLDivElement`| - |`true`| - |
|options| Image rendering options |[Object](#options)| - |`true`| - |
|config| Image rendering configuration |[Object](#configuration)| - |`false`| - |


## Options

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

### Options Properties

|Property|Description|Type|Default|Required|Others|
|--|--|--|--|--|--|
| width | Drawing board's width |`number`| - |`true`| - |
| height | Drawing board's height |`number`| - |`true`| - |
| contextWidth | Drawing context's width |`number`| - |`true`| - |
| contextHeight | Drawing context's height |`number`| - |`true`| - |
| devicePixelRatio | Device pixel scale |`number`| `1` |`false`| - |
| onlyRender | Render only disable handle elements | `boolean` | `false` |`false`| - |
| maxRecords | Maximum operation record | `number` | `10` |`false`|For redo and undo|
| disableKeyboard | Listen keyboard event | `boolean` | `false` |`false`|-|



### Options Preivew

[More Demo >>](https://idraw.js.org/playground/?demo=options)

<iframe 
    src="https://idraw.js.org/playground/?demo=options&header=false&sider=false&default-editor-split=37" 
    width="1000" height="440" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>


## Configuration

```ts
type Config = {
  elementWrapper: {
    color: string,
    controllerSize: number,
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

### Configuration Properties

|Property|Description|Type|Default|Required|Others|
|--|--|--|--|--|--|
| elementWrapper | Custom style of element wrapper |[object](#config-elementwrapper-property)| - |`false`| - |
| scrollWrapper | Custom style of drawing-board's scroll-bar wrapper |[object](#config-scrollwrapper-property)| - |`false`| - |

#### Config.elementWrapper Properties

|Property|Description|Type|Default|Required|Others|
|--|--|--|--|--|--|
| color | Custom element controller color |`string`| `#2ab6f1` | `false` | - |
| lockColor | Custom locked-element controller color |`string`| `#aaaaaa` | `false` | - |
| controllerSize | 操作点尺寸 |`number`| `8` | `false` | - |
| lineWidth | Custom element action point size |`number`| `1` | `false` | - |
| lineDash | Custom element action line style |`number[]`| `[4, 3]` | `false` | - |

#### Config.scrollWrapper Properties

|Property|Description|Type|Default|Required|Others|
|--|--|--|--|--|--|
| use | Use scroll bar |`boolean`| `false` | `false` | - |
| color | Custom scroll-bar color |`string`| `#a0a0a0` | `false` | - |
| lineWidth | Custom scroll-bar line width |`number`| `12` | `false` | - |

### Configuration Preview

[More Demo >>](https://idraw.js.org/playground/?demo=config)

<iframe 
    src="https://idraw.js.org/playground/?demo=config&header=false&sider=false&default-editor-split=37" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>