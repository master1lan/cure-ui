import { defineConfig } from 'dumi';

export default defineConfig({
  publicPath: '/cure-ui/',
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
