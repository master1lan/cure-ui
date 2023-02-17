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

请注意，安装依赖于react、react-dom的18.0.0及以上版本，后续将降低要求至17版本。

# CDN

无法提供CDN版本，因为cure-ui是需要二次编译的，你可能注意到了：cure-ui使用基于@emotion的CSS in JS技术完成所有的css样式。

# 兼容

cure-ui需要运行在现代项目中，使用webpack或者vite进行打包。cure-ui提供umd版本和esmodule版本的代码，无论哪种代码都需要进行二次编译。

