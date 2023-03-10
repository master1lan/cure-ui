/**
 * test for src/utils/fn
 */

import { describe, expect, vi, test } from 'vitest';
import { ObjectToHtmlStyle } from '../css';
import { curry, humpStringToDashString } from '../fn';
import {
  DefensiveSwitch,
  getElementStyleByName,
  openValueExampleMarginAndPadding,
} from '../fn';

describe('test DefensiveSwitch', () => {
  test('with target case', () => {
    const obj = {
      a: '1',
      b: '2',
    };
    expect(DefensiveSwitch('a', obj, '12')).toBe(obj.a);
  });
  test('no target case', () => {
    const obj = {
      a: '1',
      b: '2',
    };
    expect(DefensiveSwitch('c', obj as any, '12')).toBe('12');
  });
});

describe('test getDomStyle', () => {
  test('initial style', () => {
    const ele = document.createElement('div');
    expect(getElementStyleByName(ele, 'position')).toStrictEqual(['']);
  });
  test('ordered style', () => {
    const ele = document.createElement('div');
    ele.style.display = 'flex';
    expect(getElementStyleByName(ele, 'display')).toStrictEqual(['flex']);
  });
});

describe('test getBodyMarginAndPadding', () => {
  test('order style', () => {
    ObjectToHtmlStyle({ margin: '10px', padding: '10px' }, document.body);
    const eleStyle = document.body.style;
    expect(eleStyle.margin).toBe('10px');
    expect(eleStyle.padding).toBe('10px');
  });
});

describe('test openValueExampleMarginAndPadding', () => {
  const modifyRes = {
    top: '10px',
    right: '10px',
    bottom: '10px',
    left: '10px',
  };
  test('single value', () => {
    const res = openValueExampleMarginAndPadding('10px');
    expect(res).toStrictEqual(modifyRes);
  });
  test('two value', () => {
    const selectValue = '5px';
    const res = openValueExampleMarginAndPadding(`10px ${selectValue}`);
    expect(res).toStrictEqual({
      ...modifyRes,
      left: selectValue,
      right: selectValue,
    });
  });
  test('three value', () => {
    const selectValue_1 = '5px',
      selectValue_2 = '8px';
    const res = openValueExampleMarginAndPadding(
      `10px ${selectValue_1} ${selectValue_2}`
    );
    expect(res).toStrictEqual({
      ...modifyRes,
      left: selectValue_1,
      right: selectValue_1,
      bottom: selectValue_2,
    });
  });
  test('four value', () => {
    const selectValue_1 = '5px',
      selectValue_2 = '8px',
      selectValue_3 = '12px';
    const res = openValueExampleMarginAndPadding(
      `10px ${selectValue_1} ${selectValue_2} ${selectValue_3}`
    );
    expect(res).toStrictEqual({
      ...modifyRes,
      left: selectValue_3,
      right: selectValue_1,
      bottom: selectValue_2,
    });
  });
});

describe('test humpStringToDashString', () => {
  test('need transform', () => {
    const str = `abCd`;
    expect(humpStringToDashString(str)).toBe(`ab-cd`);
  });
  test('no need transform', () => {
    const str = `abcd`;
    expect(humpStringToDashString(str)).toBe(str);
  });
});

describe('test curry', () => {
  test('no params', () => {
    const fn = vi.fn();
    const handler = curry(fn);
    handler();
    expect(fn).toBeCalledTimes(1);
  });
  test('one params', () => {
    const fn = vi.fn((a) => {});
    let handler = curry(fn);
    //@ts-ignore
    handler = handler();
    expect(fn).toBeCalledTimes(0);
    //@ts-ignore
    handler(1);
    expect(fn).toBeCalledTimes(1);
  });
  test('two params', () => {
    const fn = vi.fn((a, b) => {});
    let handler = curry(fn);
    //@ts-ignore
    handler = handler();
    expect(fn).toBeCalledTimes(0);
    //@ts-ignore
    const params_1 = handler(1);
    expect(fn).toBeCalledTimes(0);
    params_1(2);
    expect(fn).toBeCalledTimes(1);
    handler(1, 2);
    expect(fn).toBeCalledTimes(2);
  });
});
