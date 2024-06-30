# getImageBlobURL

## Introduction

`getImageBlobURL` Export the image content from the canvas, extract the canvas content into the memory `Blob`, and generate the image's `blobURL`

## Arguments

- `{object}` `options` Configuration options for exporting images
  - `{number}` `options.devicePixelRatio` Device pixel ratio, default is `1`

## Returns

- `{Promise<object>}` Returns the complete canvas image data
  - `{string}` `blobURL` A `Blob` `URL` to a canvas image in memory
  - `{number}` `width` The width of the exported image in logical pixels
  - `{number}` `height` The height of the exported image in logical pixels
  - `{number}` `devicePixelRatio` Device pixel ratio for exported images

## Usage

```js
import { iDraw } from 'idraw';

const app = document.querySelector('#app');
const options = {
  width: 600,
  height: 400,
  devicePixelRatio: 2
};
const idraw = new iDraw(app, options);

const { blobURL } = await idraw.getImageBlobURL({ devicePixelRatio: 1 });
```

## Example

[More Demo](https://idrawjs.com/playground/?demo=api-getImageBlobURL)

<iframe class="idraw-playground-preview" 
  src="https://idrawjs.com/playground/?demo=api-getImageBlobURL&header=false&sider=false&default-editor-split=50" 
  width="1000" height="480" frameborder="no" border="0"
  style="border: 1px solid #cecece; margin: 0px auto;"
></iframe>
