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

## API

| 参数        | 说明                                    | 类型         | 默认值 |
| ----------- | --------------------------------------- | ------------ | ------ |
| defaultOpen | content 默认是否打开                    | boolean      | false  |
| children    | 正常元素，需要保证可以调用 onClick 函数 | ReactElement |        |
| content     | 展示元素，需要自行定位                  | ReactElement |        |
