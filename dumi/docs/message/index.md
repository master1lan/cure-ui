```tsx
import { Button, message } from "cure-ui";

export default () => (
  <div>
    <Button onClick={() => message.info("hello world" + Math.random() * 10)}>
      test message
    </Button>
  </div>
);
```
