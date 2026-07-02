import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(ts|tsx)',
    '../stories/**/*.mdx',
  ],

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    // One toggle drives the whole app: swaps the manager (chrome) theme and,
    // via useDarkMode() in preview.tsx, the components + docs.
    'storybook-dark-mode',
    {
      name: '@storybook/addon-docs',
      options: {
        // Enable GitHub-flavored markdown so `| … |` tables render as real tables.
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: (config) => {
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [
        ...(config.optimizeDeps?.include ?? []),
        'highcharts',
        'highcharts-react-official',
        '@storybook/addon-docs/blocks',
      ],
    };
    config.resolve = {
      ...config.resolve,
      alias: {
        ...((config.resolve as any)?.alias ?? {}),
      },
    };
    config.plugins = [
      ...(config.plugins ?? []),
      {
        name: 'fix-mdx-shim-url',
        enforce: 'post' as const,
        transform(code: string, id: string) {
          if (!id.endsWith('.mdx')) return;
          return code.replace(
            /from "file:\/\/[^"]*\/node_modules\/@storybook\/addon-docs\/dist\/mdx-react-shim(?:\.js)?"/g,
            'from "@storybook/addon-docs/mdx-react-shim"'
          );
        },
      },
    ];
    return config;
  }
};

export default config;
