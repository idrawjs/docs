# on/off

## Introduction

- `on` Register event listener
- `off` Unregister event listener

## Arguments

- `{string}` `key` Event key
  - `eventKeys.CHANGE` Listen for `Element` changes
  - `eventKeys.SCALE` Listen for canvas scaling
  - `eventKeys.SELECT` Listen for `Element` selection
  - `eventKeys.TEXT_CHANGE` Listen for `Text Element` changes
- `{function}` `callback` Event callback function

## Returns

> No return value

## Usage

```js
import { iDraw, eventKeys } from 'idraw';

const app = document.querySelector('#app');

const idraw = new iDraw(app, {
  // ...
});

const onChange = (e) => {
  // ...
};

idraw.on(eventKeys.CHANGE, onChange); // Listen for Element change events

idraw.off(eventKeys.CHANGE, onChange); // Unregister Element change event listener
```
