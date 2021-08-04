# Text

## Text

It is used to render text content. The specific type is as follows:

```ts
type Text = {
  type: 'text',
  x: number,
  y: number,
  w: number,
  h: number,
  angle: number,
  desc: {
    text: string,
    color?: string,
    fontSize?: string,
    fontFamily?: string,
    textAlign?: 'left' | 'center' | 'right',
    borderRadius?: string,
    borderWidth?: number,
    borderColor?: number,
  }
}
```

## Text.desc

The basic attribute details of the element can be viewed [Element's Detail
#](./info.md#element-s-detail).

### Text.desc Data-Type

The Data-Type of `Text.desc`

```ts
type TextDesc = {
  text: string,
  color?: string,
  fontSize?: string,
  fontFamily?: string,
  textAlign?: 'left' | 'center' | 'right',
  bgColor?: string,
  borderRadius?: string,
  borderWidth?: number,
  borderColor?: string,
}
```

### Text.desc Properties


|Property|Description|Type|Default|Required|Others|
|--|--|--|--|--|--|
| text | Text Content |`string`| - | `true` | - |
| color | Font color of Text |`string`| - | `true` | eg. `#000000` |
| fontSize | Font size of Text |`number`| `12` | `false` | - |
| fontFamily | Font family of Text |`string`| - | `false` | - |
| textAlign | Text align |`left | center | right`| `center` | `false` | - |
| bgColor | Background Color |`number`| `0` | `false` | eg. `#ffffff`  |
| borderRadius | Rectangle radius of border corner |`number`| `0` | `false` | - |
| borderWidth | Border width of Rectangle |`number`| `0` | `false` | - |
| borderColor | Border color of Rectangle |`string`| - | `false` | eg. `#000000`  |


## Complete Data Example

```js
const elementText = {
  name: "text",
  x: 160,
  y: 80,
  w: 200,
  h: 200,
  angle: 0,
  type: "text",
  desc: {
    text: 'Hello World',
    color: "#3f51b5",
    fontSize: 60,
    textAlign: 'center',
    bgColor: "#3f51b51f",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#3f51b5",
  },
}
```


## Demo Preview

[More Demo](https://idrawjs.github.io/playground/?demo=elem-text)

<iframe 
    src="https://idrawjs.github.io/playground/?demo=elem-text&header=false&sider=false&default-editor-split=37" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>