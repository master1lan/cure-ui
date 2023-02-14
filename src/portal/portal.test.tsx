import { render, fireEvent, screen } from "@testing-library/react";
// 引入测试 api ，用来编写用例的逻辑
import { describe, expect, vi, test } from "vitest";
import Portal from ".";

describe("test portal", () => {
  test("protal visible", () => {
    render(
      <Portal data-testid='portal'>
        <div>hello</div>
      </Portal>
    );
    expect(screen.getByTestId("portal")).toBeInTheDocument();
  });
});
