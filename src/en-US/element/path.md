# Path

## Path

It is used to render image content. The specific type is as follows:

```ts
type Path = {
  type: 'path';
  x: number;
  y: number;
  w: number;
  h: number;
  angle: number;
  detail: {
    commands: Array<{
      type: 'M' | 'm' | 'L' | 'l' | 'H' | 'h' | 'V' | 'v' | 'C' | 'c' | 'S' | 's' | 'Q' | 'q' | 'T' | 't' | 'A' | 'a' | 'Z' | 'z';
      params: number[];
    }>;
    originX: number;
    originY: number;
    originW: number;
    originH: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    strokeLineCap?: 'butt' | 'round' | 'square';
  };
};
```

## Path.detail Properties

The basic attribute details of the element can be viewed [Element's Detail #](./info.md#element-s-detail) .

### Path.detail Data-Type

```ts
type PathDetail = {
  commands: Array<{
    type: 'M' | 'm' | 'L' | 'l' | 'H' | 'h' | 'V' | 'v' | 'C' | 'c' | 'S' | 's' | 'Q' | 'q' | 'T' | 't' | 'A' | 'a' | 'Z' | 'z';
    params: number[];
  }>;
  originX: number;
  originY: number;
  originW: number;
  originH: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeLineCap?: 'butt' | 'round' | 'square';
};
```

### Path.detail Properties

| Property      | Description              | Type                            | Default | Required | Others        |
| ------------- | ------------------------ | ------------------------------- | ------- | -------- | ------------- |
| fill          | fill color               | `string`                        | -       | `true`   | eg. `#000000` |
| stroke        | path color               | `string`                        | -       | `true`   | eg. `#000000` |
| strokeWidth   | path width               | `number`                        | `0`     | `false`  | -             |
| strokeLineCap | Path turning type        | `'butt' \| 'round' \| 'square'` | -       | `true`   | -             |
| originX       | Path original X position | `number`                        | `0`     | `false`  | -             |
| originY       | Path original Y position | `number`                        | `0`     | `false`  | -             |
| originW       | Path original width      | `number`                        | `0`     | `false`  | -             |
| originH       | Path original height     | `number`                        | `0`     | `false`  | -             |

## Complete Data Example

```js
const elementPath = {
  uuid: '41d437b8-afbd-2d3d-14bc-912e26d3491f',
  x: 100,
  y: 100,
  w: 80,
  h: 80,
  angle: 0,
  type: 'path',
  detail: {
    commands: [
      { type: 'M', params: [10, 30] },
      { type: 'A', params: [20, 20, 0, 0, 1, 50, 30] },
      { type: 'A', params: [20, 20, 0, 0, 1, 90, 30] },
      { type: 'Q', params: [90, 60, 50, 90] },
      { type: 'Q', params: [10, 60, 10, 30] },
      { type: 'z', params: [] }
    ],
    fill: '#FF00006F',
    stroke: '#000000',
    strokeWidth: 1,
    originX: 10,
    originY: 10,
    originH: 80,
    originW: 80
  }
};
```

## Demo Preview

[More Demo >>](https://idrawjs.com/playground/?demo=elem-path)

<iframe class="idraw-playground-preview" 
    src="https://idrawjs.com/playground/?demo=elem-path&header=false&sider=false&default-editor-split=50" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
