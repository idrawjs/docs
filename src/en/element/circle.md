# Circle

## Circle

It is used to render circular or oval content. The specific type is as follows:

```ts
type Circle = {
  type: 'circle',
  x: number,
  y: number,
  w: number,
  h: number,
  angle: number,
  desc: {
    bgColor: string,
    borderRadius?: string,
    borderWidth?: number,
    borderColor?: number,
  }
}
```

## Circle.desc

The basic attribute details of the element can be viewed [Element's Detail
#](./info.md#element-s-detail) .

### Circle.desc Data-Type

The Data-Type of `Circle.desc`

```ts
type CircleDesc = {
  color?: string,
  bgColor?: string,
  borderWidth?: number,
  borderColor?: string,
}
```

### Circle.desc Properties


|Property|Description|Type|Default|Required|Others|
|--|--|--|--|--|--|
| color | Circle Color |`string`| - | `true` | eg. `#000000` |
| borderRadius | Circle radius of border corner |`number`| `0` | `false` | - |
| borderWidth | Border width of Circle |`number`| `0` | `false` | - |
| borderColor | Border color of Circle |`number`| `0` | `false` | eg. `#000000`  |


## Complete Data Example

```js
const elementCircle = {
  name: "circle",
  x: 160,
  y: 100,
  w: 200,
  h: 200,
  angle: 0,
  type: "circle",
  desc: {
    bgColor: "#d5f5f9",
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#3f51b5",
  },
}
```


## Demo Preview

[More Demo >>](https://idraw.js.org/playground/?demo=elem-circle)

<iframe 
    src="https://idraw.js.org/playground/?demo=elem-circle&header=false&sider=false&default-editor-split=37" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>