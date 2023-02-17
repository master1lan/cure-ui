import { defineConfig } from 'dumi';

const getstartPath = `/getting-started`;

export default defineConfig({
  resolve: {},
  themeConfig: {
    name: 'cure-ui',
    nav: [
      {
        title: '指南',
        link: getstartPath,
      },
    ],
    sidebar: {
      [getstartPath]: [
        {
          title: '快速开始',
          children: [
            {
              title: '安装',
              link: getstartPath,
            },
            {
              title: '使用',
              link: `${getstartPath}/usage`,
            },
            {
              title: '常见问题解答',
              link: `${getstartPath}/faq`,
            },
          ],
        },
        // {
        //   title: 'component组件',
        //   children: [
        //     {
        //       title: 'Modal',
        //       link: componentMdPath('modal'),
        //     },
        //   ],
        // },
      ],
    },
  },
});
