---
title: 使用
---

# 使用

立即使用React和Cure-ui

cure-ui组件是独立的，不需要额外引入样式；但为了确保所有设备的正确渲染和触摸缩放，建议将以下代码放入`head`标签中:

```html
<meta name="viewport" content="initial-scale=1, width=device-width" />
```

# 快速入门

下面是一个快速示例：

```tsx | pure
import React from 'react';
import ReactDOM from "react-dom";
import {Button} from "cure-ui";
ReactDOM.render(<Button>hello cure-ui</Button>,document.querySelector("#root"))
```

在实际项目中使用方式为:

```tsx
import {Button} from "cure-ui";
export default function App(){
    return <Button>hellow cure-ui</Button>
}
```

