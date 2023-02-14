import { render, fireEvent } from "@testing-library/react";
import { describe, expect, vi, test } from "vitest";
import Input from ".";

const setup = (
  defaultValue: string | number,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
) => {
  const utils = render(
      <Input defaultValue={defaultValue} onChange={onChange} />
    ),
    input = utils.getByRole("textbox") as HTMLInputElement;
  return {
    ...utils,
    input,
  };
};

describe("test input", () => {
  test("input value should change", () => {
    const fn = vi.fn();
    const { input } = setup("12", fn);
    fireEvent.change(input, { target: { value: "13" } });
    expect(input.value).toBe("13");
  });
  test("input onChange should be called", () => {
    const fn = vi.fn();
    const { input } = setup(12, fn);
    fireEvent.change(input, { target: { value: "13" } });
    expect(fn).toHaveBeenCalled();
  });
});
