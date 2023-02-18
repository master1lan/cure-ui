---
title: Modal
---



# modal 组件

modal 组件基于 portal 组件完成，Modal 可以用来快速创建对话框、弹出窗口、下拉抽屉等任何你所需要的组件。

## 基本使用

```tsx
/**
 * transform: true
 */
import { useState } from 'react';
import { Modal, Button } from 'cure-ui';

export default function BasicModal() {
  const [visible, set] = useState(false),
    handlerChangeVisible = () => set((item) => !item);
  return (
    <div>
      <Button onClick={handlerChangeVisible}>click me</Button>
      <Modal visible={visible} closeModal={handlerChangeVisible}>
        <div
          style={{
            position: 'relative',
            padding: '10px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            display: 'flex',
            backgroundColor: 'skyblue',
            width: '200px',
            height: '100px',
            borderRadius: '8px',
          }}
        >
          <span>click outside to hidden me</span>
        </div>
      </Modal>
    </div>
  );
}
```

## API

| 参数       | 说明                                         | 类型          | 默认值 |
| ---------- | -------------------------------------------- | ------------- | ------ |
| visible    | modal 是否显示，需要在调用组件内修改         | boolean       |        |
| closeModal | modal 关闭 callback，默认点击 modal 外部调用 | function      |        |
| sx         | 自定义 CSSProperties                         | CSSProperties |        |
