# undo/redo

## Introduction

- `undo` Undo
- `redo` Redo

## Arguments

> No arguments

## Returns

> No return value

## Usage

```js
import { iDraw } from 'idraw';

const app = document.querySelector('#app');

const idraw = new iDraw(app, {
  // ...
  history: true, // Enable history tracking (optional, default: false)
  historyLimit: 100 // Maximum history steps (optional, default: 100)
});

idraw.undo(); // Undo

idraw.redo(); // Redo
```
