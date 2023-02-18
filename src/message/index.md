---
title: message
---



# message 组件

注意message并非传统的组件，调用时就像调用函数一样。

目前message组件只有一种方法。

# 使用

```tsx
import { Button, message } from "cure-ui";
export default function MessageExample() {
  return (
    <>
      <Button onClick={() => message.info('message!')}>click me</Button>
    </>
  );
}
```

