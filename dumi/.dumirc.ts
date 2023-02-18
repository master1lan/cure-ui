import { defineConfig } from 'dumi';

export default defineConfig({
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
