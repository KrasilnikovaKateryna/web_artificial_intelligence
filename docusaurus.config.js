// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Artificial Intelligence',
  tagline: 'The most important invention of mankind',
  favicon: 'img/openai-icon-2021x2048-4rpe5x7n.png',

  // Set the production url of your site here
  url: 'https://krasilnikovakateryna.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/artificial-intelligence/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KrasilnikovaKateryna', // Usually your GitHub org/user name.
  projectName: 'artificial-intelligence', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      backgroundColor: '#A9A9A9',
      navbar: {
        title: 'OpenAI',
        logo: {
          alt: 'My Site Logo',
          src: 'img/openai-icon-2021x2048-4rpe5x7n.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Company',
          },
          {to: '/blog', label: 'History', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'OpenAI',
            items: [
              {
                label: 'ChatGPT',
                href: 'https://chatgpt.com/',
              },
            ],
          },
          {
            title: 'Innovations',
            items: [
              {
                label: 'Hello GPT-4o',
                href: 'https://openai.com/index/hello-gpt-4o/',
              },
              {
                label: 'OpenAI API',
                href: 'https://platform.openai.com/',
              },
              {
                label: 'Sora',
                href: 'https://openai.com/sora/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Artificial Intelligence (AI): What it is and why it matters | SAS',
                href: 'https://www.sas.com/en_us/insights/analytics/what-is-artificial-intelligence.html#:~:text=Artificial%20intelligence%20(AI)%20makes%20it,learning%20and%20natural%20language%20processing.',
              },
              {
                label: 'Artificial Intelligence',
                href: 'https://www.theverge.com/ai-artificial-intelligence',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.github,
      },
    }),
};



export default config;
