import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { createSerializer, matchers, EmotionMatchers } from '@emotion/jest';
import '@testing-library/jest-dom';
declare global {
  namespace Vi {
    interface Assertion extends EmotionMatchers {}
    interface AsymmetricMatchersContaining extends EmotionMatchers {}
  }

  // Note: augmenting jest.Matchers interface will also work.
}
//@ts-ignore
expect.addSnapshotSerializer(createSerializer());

expect.extend({
  toHaveStyleRule: matchers.toHaveStyleRule,
});
// 全局设置清理函数，避免每个测试文件手动清理
afterEach(() => {
  cleanup();
});
