import { load, addParameters } from "@storybook/react";

addParameters({
  options: {
    docs: { inlineStories: true }
  }
});

load(require.context("../src", true, /\.stories\.js$/), module);
load(require.context("../src", true, /\.stories\.mdx$/), module);
