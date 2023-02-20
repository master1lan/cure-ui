---
title: 常见问题解答
---

# 如何使用？

这里以 vite 为例

```bash
pnpm create vite
cd vite-project && pnpm install cure-ui
```

然后将main.tsx(jsx)的内容换成:

```tsx | pure
import { Button, message } from "cure-ui";
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <Button onClick={message.info.bind(null, `hello cure-ui!`)}>click me</Button>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

然后执行命令：

```bash
pnpm run dev
```

根据terminal里的地址进行查看（一般是http://localhost:8000）。
