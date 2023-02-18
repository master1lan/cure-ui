---
title: Portal
---



# portal 组件

portal 组件是最基础的组件之一，它的主要功能是将某个组件传送到其他位置，目前只支持传送到 body 最后面。

## 基本使用

```tsx
/**
 * transform: true
 */
import { useState } from 'react';
import { Button, Portal } from 'cure-ui';
export default function BasicPortal() {
  const [visible, set] = useState(false),
    handlerClick = () => set((item) => !item);
  return (
    <>
      <Button onClick={handlerClick}>click me</Button>
      {visible && (
        <Portal>
          <div>hello world</div>
        </Portal>
      )}
    </>
  );
}
```
