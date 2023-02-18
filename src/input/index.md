---
title: Input
---

# Input 组件

输入框组件

# 使用

```tsx
import {Input} from "cure-ui";
export default function InputExample() {
  return (
    <>
      <Input
        defaultValue={'hello world'}
        onChange={() => console.log('changeing input value'!)}
      />
    </>
  );
}
```

