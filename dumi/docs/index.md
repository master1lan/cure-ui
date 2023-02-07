```tsx
import React from "react";

export default () => <h1>Hello dumi!</h1>;
```

```tsx
// import { Button } from "../../src/index";
import { Button } from "demo-ui";
export default () => <Button shape='circle'>hello</Button>;
```

```tsx
import { message } from "demo-ui";
export default () => (
  <button onClick={() => message.info("success")}>click</button>
);
```
