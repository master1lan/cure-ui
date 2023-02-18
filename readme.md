# cure-ui

[![Coverage Status](https://coveralls.io/repos/github/master1lan/cure-ui/badge.svg?branch=master)](https://coveralls.io/github/master1lan/cure-ui?branch=master)

易扩展的简易 React 组件库

## 安装

### npm

若想安装并写入`package.json`依赖包，请运行以下命令:

```shell
// 使用npm
npm install cure-ui @emotion/styled @emotion/react

// 使用yarn
yarn add cure-ui @emotion/styled @emotion/react

// 使用pnpm (推荐)
pnpm add cure-ui @emotion/styled @emotion/react
```

## 文件结构

1. dumi 下的 docs 存放文档，使用 markdown 编写。dumi 官网：https://d.umijs.org/。
2. example 文件夹存放开发调试的内容，大部分是直接调用各组件文件夹下写好的 example
3. lib 存放 npm 包发布的内容
4. src 存放源码

## 源码编写规范

- 一个组件一个文件夹，index 进行默认导出
- 每个组件文件夹应该有：
  - 类型声明文件
  - 样式文件
  - 代码文件
  - 测试文件
- 组件统一在 src/index 下抛出。

# 技术栈

- vite^4.0 脚手架 https://cn.vitejs.dev/
- vitest https://cn.vitest.dev/ @emotion/jest https://emotion.sh/docs/@emotion/jest @testing-library/react https://testing-library.com/docs/react-testing-library/intro/ 进行测试
- @emotion https://emotion.sh/docs/introduction 编写 css 样式，写法和 less 差不多，主要特点是很自由。
- dumi https://d.umijs.org/ 写文档。

# roadmap

- [ ] 目前实现的组件写好测试
- [ ] 完善 package.json，主要是发布相关的
- [ ] vite 打包优化
- [ ] typescript 类型声明文件合并
- [ ] 写好文档
