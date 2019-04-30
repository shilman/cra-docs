import { load, addParameters } from '@storybook/react';
import { Wrapper } from '@storybook/components';

addParameters({
  options: {
    docs: {
      inlineStories: true,
      mdxComponents: {
        wrapper: Wrapper,
      },
    },
  }
});

load(require.context('../src', true, /\.stories\.js$/), module);
load(require.context('../src', true, /\.stories\.mdx$/), module);