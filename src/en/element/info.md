# Essential Information

## What is iDraw.js's Element

The content of drawing is based on "`Element`" in iDraw.js. Further more, the process of drawing is basically to realize the function of drawing around the layout, style, content and other attributes of controlling elements.

There six types of elements are currently supported in iDraw.js :

1. [Text](./text.md) 
2. [Rect](./rect.md) 
3. [Circle](./circle.md) 
4. [Image](./image.md) 
5. [SVG](./svg.md) 
6. [HTML](./html.md) 

## Element's Detail

### Element Basic Content

```ts
type Element = {
  type: 'text' | 'rect' | 'circle' | 'image' | 'svg' | 'html',
  uuid?: string,
  name?: string,
  x: number,
  y: number,
  w: number,
  h: number,
  angle?: number,
  desc: any, // Different element has different description
  operation?: {
    lock?: boolean,
    invisible?: boolean,
    disableScale?: boolean,
    disableRotate?: boolean,
    limitRatio?: boolean,
  },
  extension?: {[key: string]: any} | any;
}
```

### Element Basic Properties

|Property|Description|Type|Default|Required|Others|
|--|--|--|--|--|--|
| type | Element type |` text | rect | circle | image | svg | html `| - | `true` | - |
| uuid | Element unique ID |`string`| - | `false` | The UUID is automatically added internally in iDraw.js |
| name | Element name |`string`| - | `false` | - |
| x | X-axis offset |`number`| - | `true` | - |
| y | Y-axis offset |`number`| - | `true` | - |
| w | Element width |`number`| - | `true` | - |
| h | Element height |`number`| - | `true` | - |
| angle | Element rotation angle |`number`| `0` | `false` | `[0, 360]` |
| lock | Set the lock-staus of element |`boolean`| `false` | `false` | The view operation cannot be controlled after the element is locked |
| desc | Description of different elements |`object` (Please check the description of each element for details) | - | `true` | - |
| operation.lock |  Set the lock-staus of element |`boolean`| `false` | `false` | The view operation cannot be controlled after the element is locked |
| operation.invisible | - |`boolean`| `false` | `false` | - |
| operation.disableScale | Disable scaling for element  |`boolean`| - | `false` |Disable scaling for element and hide controllers of scaling |
| operation.disableRotate | Disable rotate for element |`boolean`| - | `false` | Disable scaling for element and hide controllers of rotating|
| operation.limitRatio | Limit element width and height ratio |`boolean`| - | `false` | When the element is scaled, it is scaled according to its width and height ratio |
| extension | Extensions |`{[key: string]: any} | any`| - | - |  |

## Usage of Elements

```js
import iDraw from 'idraw';

import iDraw from 'idraw';
const data = {
  elements: [
    {
      type: "text",
      name: "rect-001",
      x: 160,
      y: 80,
      w: 200,
      h: 200,
      angle: 0,
      desc: {
        text: 'Hello World',
        color: "#3f51b5",
        fontSize: 60,
        textAlign: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#3f51b5",
      },
    },
  ],
}

const app = document.querySelector('#app');
const idraw = new iDraw(app, {
  width: 600,
  height: 400,
  contextWidth: 600,
  contextHeight: 400,
  devicePixelRatio: 4,
});

// Set drawing-data for rendering image
idraw.setData(data);
```

## Demo Preview

[More Demo >>](https://idraw.js.org/playground/?demo=elem-rect)

<iframe 
    src="https://idraw.js.org/playground/?demo=elem-rect&header=false&sider=false&default-editor-split=37" 
    width="1000" height="540" frameborder="no" border="0"
    style="border: 1px solid #cecece; margin: 0px auto;"
  ></iframe>
