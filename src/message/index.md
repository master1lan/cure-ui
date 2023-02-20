---
title: message
---

# message 组件

注意 message 并非传统的组件，调用时就像调用函数一样。

目前 message 组件只有一种方法。

# 使用

```tsx
import { Button, message } from 'cure-ui';
export default function MessageExample() {
  return (
    <>
      <Button onClick={() => message.info('message!')}>click me</Button>
    </>
  );
}
```

## API

| 参数 | 说明         | 类型               | 默认值 |
| ---- | ------------ | ------------------ | ------ |
| info | message 弹出 | (msg:string)=>void |        |
