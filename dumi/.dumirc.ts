import { defineConfig } from 'dumi';

export default defineConfig({
  codeSplitting: {
    jsStrategy: 'granularChunks',
    jsStrategyOptions: {},
  },
  resolve: {
    atomDirs: [
      {
        type: 'component',
        dir: '../src',
      },
    ],
  },
  themeConfig: {
    name: 'cure-ui',
  },
});
