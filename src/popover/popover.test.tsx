import { render, fireEvent, screen } from "@testing-library/react";
// 引入测试 api ，用来编写用例的逻辑
import { describe, expect, vi, test } from "vitest";
import Popover from ".";

describe("test popover", () => {
  test("popover click", () => {
    const {} = render(
      <Popover defaultOpen={false} content={<div>hello</div>}>
        <button>click me</button>
      </Popover>
    );
    expect(screen.queryByText("hello")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.queryByText("hello")).toBeInTheDocument();
  });
});
