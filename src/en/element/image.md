# Image

## Image

It is used to render image content. The specific type is as follows:

```ts
type Image = {
  type: 'image',
  x: number,
  y: number,
  w: number,
  h: number,
  angle: number,
  desc: {
    src: string,
  }
}
```

## Image.desc

The basic attribute details of the element can be viewed [Element's Detail
#](./info.md#element-s-detail) .

### Image.desc Data-Type

The Data-Type of `Image.desc`

```ts
type ImageDesc = {
  src: string,
}
```

### Image.desc Properties


|Property|Description|Type|Default|Required|Others|
|--|--|--|--|--|--|
| src | The image URL or DataURL |`string`| - | `true` | - |


## Complete Data Example

```js
const elementImage = {
  name: "image",
  x: 160,
  y: 100,
  w: 200,
  h: 200,
  angle: 0,
  type: "image",
  desc: {
    src: './image/github.png'
  },
}
```


## Demo Preview

[More Demo >>](https://idrawjs.github.io/playground/?demo=elem-image)

<iframe 
    src="https://idrawjs.github.io/playground/?demo=elem-image&header=false&sider=false&default-editor-split=37" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>