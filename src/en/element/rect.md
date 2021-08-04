# Rect

## Rectangle

It is used to render rectangle content. The specific type is as follows:

```ts
type Rect = {
  type: 'rect',
  x: number,
  y: number,
  w: number,
  h: number,
  angle: number,
  desc: {
    color: string,
    borderRadius?: string,
    borderWidth?: number,
    borderColor?: number,
  }
}
```

## Rect.desc

The basic attribute details of the element can be viewed [Element's Detail
#](./info.md#element-s-detail) .

### Rect.desc Data-Type

The Data-Type of `Rect.desc`

```ts
type RectDesc = {
  color?: string,
  bgColor?: string,
  borderWidth?: number,
  borderColor?: string,
}
```

### Rect.desc Properties


|Property|Description|Type|Default|Required|Others|
|--|--|--|--|--|--|
| color | Rectangle color |`string`| - | `true` | eg. `#000000` |
| borderRadius | Rectangle radius of border corner |`number`| `0` | `false` | - |
| borderWidth | Border width of Rectangle |`number`| `0` | `false` | - |
| borderColor | Border color of Rectangle |`string`| - | `false` | eg. `#000000`  |


## Complete Data Example

```js
const elementRect = {
  name: "rect",
  x: 160,
  y: 120,
  w: 200,
  h: 100,
  angle: 30,
  type: "rect",
  desc: {
    color: "#d5f5f9",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#3f51b5",
  },
}
```


## Demo Preview

[More Demo >>](https://idrawjs.github.io/playground/?demo=elem-rect)

<iframe 
    src="https://idrawjs.github.io/playground/?demo=elem-rect&header=false&sider=false&default-editor-split=37" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>