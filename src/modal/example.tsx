import { useState } from 'react';
import { Button, Modal } from '..';

export default function ModalExample() {
  const [visible, set] = useState(false),
    handlerChangeVisible = () => set((item) => !item);

  return (
    <>
      <Button onClick={handlerChangeVisible}>change visible</Button>
      <Modal visible={visible} closeModal={handlerChangeVisible}>
        <div
          style={{
            position: 'relative',
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
    </>
  );
}
