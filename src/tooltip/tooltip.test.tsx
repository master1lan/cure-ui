import { render, fireEvent, screen } from "@testing-library/react";
// 引入测试 api ，用来编写用例的逻辑
import { describe, expect, vi, test } from "vitest";
import ToolTip from ".";

const RenderToolTip = () =>
  render(
    <ToolTip title={"hello"}>
      <button>button</button>
    </ToolTip>
  );

describe("test tooltip", () => {
  test("tooltip children visible", () => {
    RenderToolTip();
    expect(screen.getByText("button")).toBeInTheDocument();
  });
  test("tooltip no hover content hidden", () => {
    RenderToolTip();
    expect(screen.queryByText("hello")).not.toBeInTheDocument();
  });
  test("tooltip hover children content visible", () => {
    RenderToolTip();
    fireEvent.mouseEnter(screen.getByText("button"));
    expect(screen.queryByText("hello")).toBeInTheDocument();
    fireEvent.mouseLeave(screen.getByText("button"));
    expect(screen.queryByText("hello")).not.toBeInTheDocument();
  });
});
