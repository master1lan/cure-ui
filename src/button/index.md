---
title: Button
demo:
  cols: 2
---

# Button组件

按钮组件，原生type属性请使用htmlType替换

# 使用

```tsx
import {Button} from 'cure-ui';
export default function ButtonExample() {
  return (
    <>
      <div style={{display:'flex',gap:"20px",marginBottom:"20px"}}>
        <Button size="small">small</Button>
        <Button size="middle">middle</Button>
        <Button size="large">large</Button>
      </div>
      <div style={{display:'flex',gap:"20px"}}>
        <Button shape="circle">circle</Button>
        <Button shape="default">default</Button>
        <Button shape="round">round</Button>
      </div>
    </>
  );
}
```



