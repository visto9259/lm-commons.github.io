// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LM-Commons',
  tagline: 'Community developed components and starter kits for Laminas MVC and Mezzio',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lm-commons.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LM-Commons', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  "markdown": {
    "hooks": {
      onBrokenMarkdownLinks: 'warn',
    }
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
          editUrl: 'https://github.com/lm-commons/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/lm-commons/tree/master/',
          onUntruncatedBlogPosts: 'ignore',
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
      image: 'img/LMC-social-card.jpg',
      colorMode: {
        disableSwitch: true,
        defaultMode: 'light'
      },

      announcementBar: {
        id: 'mvc-maintenance-only',
        content: "<h1 style='font-size: 120%'><strong>Many LMC Packages are now Maintenance-only. <a href='/blog/MVC-maintenance-only'>Details</a> </strong></h1>",
        isCloseable: false,
        backgroundColor: 'lightyellow'
      },

      navbar: {
        title: 'LM-Commons',
        logo: {
          alt: 'LM-Commons Logo',
          src: 'img/LMC-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'components',
            position: 'left',
            label: 'Components',
          },
          {
            type: 'docSidebar',
            sidebarId: 'starterKits',
            position: 'left',
            label: 'Starter Kits',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorials',
            position: 'left',
            label: 'Tutorials',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right'
          },
          {
            href: 'https://github.com/lm-commons',
            //label: 'GitHub',
            position: 'right',
            className: 'header-github-link',          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/nAAu7AhR',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/LM-Commons',
              },
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'Disclaimer',
                to: 'disclaimer',
              },
              /*
              {
                label: 'Privacy',
                to: 'privacy',
              },

               */
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LM-Commons Organization.<br><span style="font-size:75%">Built with Docusaurus</span>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'php']
      },
    }),
};

export default config;
