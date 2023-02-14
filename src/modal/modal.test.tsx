import { render, fireEvent, screen } from "@testing-library/react";
// 引入测试 api ，用来编写用例的逻辑
import { describe, expect, vi, test } from "vitest";
import Modal from ".";

describe("test modal", () => {
  test("modal visible", () => {
    const { rerender, container } = render(
      <Modal visible={true} closeModal={() => {}}>
        <div data-testId='test'>test</div>
      </Modal>
    );
    expect(screen.getByTestId("test")).toHaveTextContent("test");
    rerender(
      <Modal visible={false} closeModal={() => {}}>
        <div data-testId='test'>test</div>
      </Modal>
    );
    expect(container.childNodes.length).toEqual(0);
  });
  test("modal closefn", () => {
    const handleClose = vi.fn();
    const { getByTestId } = render(
      <Modal visible={true} closeModal={handleClose} data-testid='modal'>
        <div>test</div>
      </Modal>
    );
    fireEvent.click(getByTestId("modal"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
