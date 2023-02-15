import { render, fireEvent, screen } from '@testing-library/react';
// 引入测试 api ，用来编写用例的逻辑
import { describe, expect, vi, test } from 'vitest';
import Modal from '.';

describe('test modal', () => {
  test('modal visible', () => {
    const { rerender } = render(
      <Modal visible={true} closeModal={() => {}}>
        <div>test</div>
      </Modal>
    );
    expect(screen.queryByText('test')).toBeInTheDocument();
    rerender(
      <Modal visible={false} closeModal={() => {}}>
        <div>test</div>
      </Modal>
    );
    expect(screen.queryByText('test')).not.toBeInTheDocument();
  });
  test('modal closefn', () => {
    const handleClose = vi.fn();
    const { getByTestId } = render(
      <Modal visible={true} closeModal={handleClose} data-testid="modal">
        <div>test</div>
      </Modal>
    );
    fireEvent.click(getByTestId('modal'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
