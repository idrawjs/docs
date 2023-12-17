# Image

## Image

It is used to render image content. The specific type is as follows:

```ts
type Image = {
  type: 'image';
  x: number;
  y: number;
  w: number;
  h: number;
  angle: number;
  detail: {
    src: string;
  };
};
```

## Image.detail

The basic attribute details of the element can be viewed [Element's Detail #](./info.md#element-s-detail) .

### Image.detail Data-Type

The Data-Type of `Image.detail`

```ts
type ImageDetail = {
  src: string;
};
```

### Image.detail Properties

| Property | Description              | Type     | Default | Required | Others |
| -------- | ------------------------ | -------- | ------- | -------- | ------ |
| src      | The image URL or DataURL | `string` | -       | `true`   | -      |

## Complete Data Example

```js
const elementImage = {
  name: 'image',
  x: 160,
  y: 100,
  w: 200,
  h: 200,
  angle: 0,
  type: 'image',
  detail: {
    src: './image/github.png'
  }
};
```

## Demo Preview

[More Demo >>](https://idraw.js.org/playground/?demo=elem-image)

<iframe class="idraw-playground-preview" 
    src="https://idraw.js.org/playground/?demo=elem-image&header=false&sider=false&default-editor-split=50" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
