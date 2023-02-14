import { render, fireEvent, screen } from "@testing-library/react";
// 引入测试 api ，用来编写用例的逻辑
import { describe, expect, vi, test } from "vitest";
import Popover from ".";

describe("test popover", () => {
  test("popover click", () => {
    render(
      <Popover defaultOpen={false} content={<div>hello</div>}>
        <button>click me</button>
      </Popover>
    );
    expect(screen.queryByText("hello")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.queryByText("hello")).toBeInTheDocument();
  });
  test("popover click hidden", () => {
    render(
      <Popover defaultOpen={true} content={<div data-testid='test'>hello</div>}>
        <button>click me</button>
      </Popover>
    );
    // visible
    expect(screen.queryByText("hello")).toBeInTheDocument();
    // hidden
    fireEvent.click(screen.getByRole("button"));
    expect(screen.queryByText("hello")).not.toBeInTheDocument();
  });
  test("popover content click visible", () => {
    render(
      <Popover defaultOpen={true} content={<div data-testid='test'>hello</div>}>
        <button>click me</button>
      </Popover>
    );
    // visible
    expect(screen.queryByText("hello")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("test"));
    expect(screen.queryByText("hello")).toBeInTheDocument();
  });
  test("popover outside click hidden", () => {
    const { container } = render(
      <Popover defaultOpen={true} content={<div data-testid='test'>hello</div>}>
        <button>click me</button>
      </Popover>,
      {
        container: document.body,
      }
    );
    // visible
    expect(screen.queryByText("hello")).toBeInTheDocument();
    fireEvent.click(container);
    expect(screen.queryByText("hello")).not.toBeInTheDocument();
  });
});
