/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: '舒老头-web前端工程师',
  tagline: '记录生活&分享技术',
  url: 'https://shulaotou.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw', 
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'shulaotou', // Usually your GitHub org/user name.
  projectName: 'shulaotou.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '舒老头Blog',
      logo: {
        alt: 'My Facebook Project Logo',
        src: 'img/logo.svg',
      },
      items: [ 
        {to: 'blog', label: '博客', position: 'right'},
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'right',
        },
        {
          to: '#',
          activeBasePath: 'tags',
          label:'分类',
          position:'right',
          items:[
            {
              to:'blog/tags/前端',
              label:'前端',
            }
          ]
        },
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/facebook/shulaotou',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '更多',
          items: [
            {
              label: '学习文档',
              to: 'docs/',
            },
            {
              label: '博客',
              to: 'blog/',
            },
          ],
        },
        {
          title: '友链',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            }
          ],
        }
      ],
      // logo: {
      //   alt: 'Facebook Open Source Logo',
      //   src: 'img/oss_logo.png',
      //   href: 'https://opensource.facebook.com',
      // },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} 舒老头, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Shulaotou/shulaotou.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
