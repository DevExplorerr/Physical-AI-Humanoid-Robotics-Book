// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Book',
  tagline: 'Building and Controlling Intelligent Robots',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://devexplorerr.github.io',
  baseUrl: '/',

  organizationName: 'DevExplorerr',
  projectName: 'physical-ai-humanoid-robotics-book',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/DevExplorerr/physical-ai-humanoid-robotics-book/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics Book',
      logo: {
        alt: 'DevExplorerr Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {
          href: 'https://github.com/DevExplorerr',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
  style: 'dark',
  links: [
    {
      title: 'Book',
      items: [
        {
          html: `
            <p style="margin: 0; line-height: 1.5;">
              "Physical AI & Humanoid Robotics" explores robotics and AI, making learning engaging, practical, and accessible for everyone.
            </p>
          `,
        },
      ],
    },
    {
      title: 'Connect with Me',
      items: [
        {
          html: `
            <p style="margin: 0; line-height: 1.5;">
              Connect with me on 
              <a href="https://www.linkedin.com/in/muhammadsaadjamal/" target="_blank" rel="noopener noreferrer" style="color: #ffffff; text-decoration: underline;">LinkedIn</a>, 
              <a href="https://github.com/DevExplorerr" target="_blank" rel="noopener noreferrer" style="color: #ffffff; text-decoration: underline;">GitHub</a>, 
              <a href="mailto:saadj4775@gmail.com" style="color: #ffffff; text-decoration: underline;">Email</a>, and 
              <a href="https://discord.com/users/devexplorerr" target="_blank" rel="noopener noreferrer" style="color: #ffffff; text-decoration: underline;">Discord</a>.
            </p>
          `,
        },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} DevExplorerr — Author of Physical AI & Humanoid Robotics.`,
},




    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
