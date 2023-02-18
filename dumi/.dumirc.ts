import { defineConfig } from 'dumi';

export default defineConfig({
  base: 'cure-ui/',
  outputPath: 'dist/cure-ui',
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
