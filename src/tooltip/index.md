---
title: Tooltip
---

# Tooltip组件

类似于Popover组件，但是主要应用在鼠标移动场景下；需要确保children可以接收事件。

# 使用

```tsx
import {Button,ToolTip} from "cure-ui";
export default function TooltipExample(){
	return (
    	<>
      <ToolTip title={'hello'}>
        <Button>button</Button>
      </ToolTip>
    </>
    )
}
```

