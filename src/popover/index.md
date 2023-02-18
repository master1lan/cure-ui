---
title: Popover
---

# Popover 组件

Popover 组件可运用在下拉栏等场景，内部使用 protal 组件实现。

# 使用

```tsx
import { Button, Popover } from 'cure-ui';
export default function PopoverExample() {
  return (
    <Popover defaultOpen={false} content={<div>hello</div>}>
      <Button>show</Button>
    </Popover>
  );
}
```
