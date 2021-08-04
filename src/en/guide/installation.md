# Installation

## Lastest Version

[![iDraw.js](https://img.shields.io/npm/v/idraw.svg?sanitize=idraw)](https://www.npmjs.com/package/idraw) 

## Installation

There are three ways of adding `iDraw.js` to a project:

1. Install it using [NPM](#npm).
2. Import it as a [CDN Package](#cdn) on the page.
3. Download the JavaScript file and [host them yourself](#download-and-self-host).

## NPM


NPM is the recommended installation method when building large scale with `iDraw.js`. It pairs nicely with module bundlers such as Webpack, Rollup or Vite.

```sh
npm install idraw
```

## CDN

For prototyping or learning purposes, you can use the latest version with:

```html
<script src="https://unpkg.com/idraw"></script>
```

```html
<!-- use global value -->
<script>
  (() => {
    const { IDraw } = window.iDraw;
    const app = document.querySelector('#app');
    const idraw = new IDraw(app, {
      width: 600,
      height: 400,
      contextWidth: 600,
      contextHeight: 400,
      devicePixelRatio: 4,
    });
  })()
</script>
```


## Download and Self Host

If you want to avoid using build tools but can't use CDN in production then you can download the relevant `.js` file and host it using your own web server. You can include it using a `<script>` tag, just like with the CDN approach.


The files can be browsed and download from a CDN such as [unpkg](https://unpkg.com/idraw) .



