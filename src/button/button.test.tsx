// 引入测试库函数，用来 mocking
import { humpStringToDashString } from "@src/utils/fn";
import { render, fireEvent } from "@testing-library/react";
// 引入测试 api ，用来编写用例的逻辑
import { describe, expect, vi, test } from "vitest";
import Button from ".";
import {
  ButtonProps,
  ButtonShapeTypeArr,
  ButtonShapeToCss,
  ButtonShapeToCssChangeStyleNames,
} from "./type";
import {
  ButtonSizeToCssChangeStyleNames,
  ButtonSizeToCss,
  ButtonSizeTypeArr,
} from "./type";
describe("test Button", () => {
  // button clickable
  test("button click event", () => {
    const handleCallback = vi.fn();
    const button = render(<Button onClick={handleCallback}></Button>);
    const element = button.getByRole("button");
    fireEvent.click(element);
    expect(handleCallback).toHaveBeenCalled();
  });
  // button set attr disabled and disclickable
  test("disable the button", () => {
    const handleClick = vi.fn();
    const button = render(<Button onClick={handleClick} disabled></Button>);
    const element = button.getByRole("button");
    fireEvent.click(element);
    expect(handleClick).not.toHaveBeenCalled();
  });
});

const ButtonPropsCheckTestFn = (
  description: string,
  ButtonProps: ButtonProps,
  styleArr: readonly string[],
  target: { [name: string]: any }
) => {
  test(description, () => {
    const button = render(<Button {...ButtonProps}></Button>);
    const element = button.getByRole("button");
    styleArr.forEach((name) => {
      expect(element).toHaveStyleRule(
        humpStringToDashString(name),
        target[name]
      );
    });
  });
};
describe.each(ButtonSizeTypeArr)("test the size of Button", (size) =>
  ButtonPropsCheckTestFn(
    `Button size ${size} test`,
    { size },
    ButtonSizeToCssChangeStyleNames,
    ButtonSizeToCss(size)
  )
);
describe.each(ButtonShapeTypeArr)("test the shape of Button", (shape) =>
  ButtonPropsCheckTestFn(
    `Button shape ${shape} test`,
    { shape },
    ButtonShapeToCssChangeStyleNames,
    ButtonShapeToCss(shape)
  )
);
