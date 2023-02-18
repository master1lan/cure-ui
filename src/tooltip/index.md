---
title: Tooltip
---

# Tooltip 组件

类似于 Popover 组件，但是主要应用在鼠标移动场景下；需要确保 children 可以接收事件。

# 使用

```tsx
import { Button, ToolTip } from 'cure-ui';
export default function TooltipExample() {
  return (
    <>
      <ToolTip title={'hello'}>
        <Button>button</Button>
      </ToolTip>
    </>
  );
}
```
