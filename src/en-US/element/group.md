# Group

## Group

It is used to render group or oval content. The specific type is as follows:

```ts
type Group = {
  type: 'group';
  x: number;
  y: number;
  w: number;
  h: number;
  angle: number;
  detail: {
    children: Element;
    background: string;
    borderRadius?: string;
    borderWidth?: number;
    borderColor?: number;
  };
};
```

## Group.detail

The basic attribute details of the element can be viewed [Element's Detail #](./info.md#element-s-detail) .

### Group.detail Data-Type

The Data-Type of `Group.detail`

```ts
type GroupDetail = {
  children: Array<Element>;
  background?: string;
  background?: string;
  borderWidth?: number;
  borderColor?: string;
};
```

### Group.detail Properties

| Property     | Description                   | Type             | Default | Required | Others        |
| ------------ | ----------------------------- | ---------------- | ------- | -------- | ------------- |
| children     | Children element list         | `Array<Element>` | -       | `true`   | eg. `#000000` |
| background   | Group background color        | `string`         | -       | `false`  | eg. `#000000` |
| borderRadius | Group radius of border corner | `number`         | `0`     | `false`  | -             |
| borderWidth  | Border width of Group         | `number`         | `0`     | `false`  | -             |
| borderColor  | Border color of Group         | `number`         | `0`     | `false`  | eg. `#000000` |

## Complete Data Example

```js
const elementGroup = {
  name: 'group',
  x: 160,
  y: 120,
  w: 200,
  h: 100,
  angle: 30,
  type: 'group',
  detail: {
    children: []
  }
};
```

## Demo Preview

[More Demo >>](https://idrawjs.com/playground/?demo=elem-group)

<iframe class="idraw-playground-preview" 
    src="https://idrawjs.com/playground/?demo=elem-group&header=false&sider=false&default-editor-split=50" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
