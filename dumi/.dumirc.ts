import { defineConfig } from 'dumi';
import CompressionPlugin from 'compression-webpack-plugin';
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: '/cure-ui',
  publicPath: '/cure-ui/',
  // mfsu: { strategy: 'normal' },
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
  extraBabelPlugins: isProd ? ['babel-plugin-dynamic-import-node'] : [],
  chainWebpack(config) {
    config.optimization.splitChunks.merge({
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 10,
      maxInitialRequests: 5,
      cacheGroups: {
        react: {
          name: 'react',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router)/,
        },
        dumi: {
          name: 'dumi',
          chunks: 'all',
          test: /(@antd|antd|@ant-design)/,
        },
        dotdumi: {
          name: 'dotdumi',
          chunks: 'all',
          test: /[\\/]dumi[\\/]/,
        },
      },
    });
    if (isProd) {
      config.plugin('compression-webpack-plugin').use(CompressionPlugin, [
        {
          test: /\.(js|css|html)$/i,
          threshold: 10240,
          deleteOriginalAssets: false,
        },
      ]);
    }
  },
  analyze: {
    analyzerMode: 'static',
  },
});
