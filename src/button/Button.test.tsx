import Button from "./button";
// 引入测试库函数，用来 mocking
import { render, fireEvent } from "@testing-library/react";
// 引入测试 api ，用来编写用例的逻辑
import { describe, it, expect, vi } from "vitest";

describe("Button", () => {
  const handleCallback = vi.fn();

  const button = render(<Button onClick={handleCallback}>click</Button>);
  it("button click event executed correctly", () => {
    const element = button.getByRole("button");
    fireEvent.click(element);

    expect(handleCallback).toHaveBeenCalled();
  });
});
