---
title: Input
---

# Input 组件

输入框组件

# 使用

```tsx
import { Input } from 'cure-ui';
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

## API

| 参数         | 说明                 | 类型                     | 默认值 |
| ------------ | -------------------- | ------------------------ | ------ |
| defaultValue | 输入框默认值         | string\|number           |        |
| onChange     | 输入内容修改事件     | 原生 React onChange 事件 |        |
| sx           | 自定义 CSSProperties | CSSProperties            |        |
