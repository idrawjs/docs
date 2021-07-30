# 文本元素

## Text

用来渲染文字内容，具体格式如下所示：

```ts
type Text = {
  type: 'text',
  x: number,
  y: number,
  w: number,
  h: number,
  angle: number,
  desc: {
    text: string,
    color?: string,
    fontSize?: string,
    fontFamily?: string,
    textAlign?: 'left' | 'center' | 'right',
    borderWidth?: number,
    borderColor?: number,
  }
}
```

## 详解



## 示例


## 效果预览