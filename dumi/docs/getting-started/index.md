---
title: 快速上手
---

# 安装

## npm

若想安装并写入`package.json`依赖包，请运行以下命令:

```shell
// 使用npm
npm install cure-ui @emotion/styled @emotion/react

// 使用yarn
yarn add cure-ui @emotion/styled @emotion/react

// 使用pnpm (推荐)
pnpm add cure-ui @emotion/styled @emotion/react
```

请注意，安装依赖于 react、react-dom 的 18.0.0 及以上版本，后续将降低要求至 17 版本。

# CDN

无法提供 CDN 版本，因为 cure-ui 是需要二次编译的，你可能注意到了：cure-ui 使用基于@emotion 的 CSS in JS 技术完成所有的 css 样式。

# 兼容

cure-ui 需要运行在现代项目中，推荐使用 webpack 或者 vite 进行打包。cure-ui 提供 umd 版本和 esmodule 版本的代码，无论哪种代码都需要进行二次编译。
