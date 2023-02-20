---
title: Button
demo:
  cols: 2
---

# Button 组件

按钮组件，原生 type 属性请使用 htmlType 替换

# 使用

```tsx
import { Button } from 'cure-ui';
export default function ButtonExample() {
  return (
    <>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <Button size="small">small</Button>
        <Button size="middle">middle</Button>
        <Button size="large">large</Button>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Button shape="circle">circle</Button>
        <Button shape="default">default</Button>
        <Button shape="round">round</Button>
      </div>
    </>
  );
}
```

## API

| 参数  | 说明                 | 类型                         | 默认值    |
| ----- | -------------------- | ---------------------------- | --------- |
| shape | 按钮外形             | 'default'\|'circle'\|'round' | 'default' |
| size  | 按钮大小             | 'large'\|'middle'\|'small'   | 'middle'  |
| sx    | 自定义 CSSProperties | CSSProperties                |           |
