import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/cure-ui',
  publicPath: '/cure-ui/',
  mfsu: { strategy: 'normal' },
  routePrefetch: {},
  manifest: {},
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
  extraBabelPlugins:
    process.env.NODE_ENV === 'production'
      ? ['babel-plugin-dynamic-import-node']
      : [],
  chainWebpack(config) {
    config.optimization.splitChunks.merge({
      cacheGroups: {},
    });
  },
});
