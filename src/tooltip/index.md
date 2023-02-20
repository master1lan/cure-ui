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

## API

| 参数  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| title | 提示文字 | string |        |

## FAQ

Q：为什么有了 Popover 还要有 tooltip？

A：tooltip 主要应用常见类似 html 标签的 title，而 Popover 可以承载更多的信息。这里建议将两个组件按照不同场景使用降低心智负担。
