import React from "react";
import { ThemeProvider } from "emotion-theming";
import { MDXProvider } from "@mdx-js/tag";
import * as defaultMarkdownComponents from "./components";
import theme from "./theme";

import { PlayProvider } from "./PlayContext";

const Play = ({ children, components, options, md: markdownComponents }) => {
  const md = { ...defaultMarkdownComponents, ...markdownComponents };
  return (
    <PlayProvider components={components} options={options} md={md}>
      {/* <ThemeProvider theme={{ styleguide: theme }}> */}
      <MDXProvider components={md}>{children}</MDXProvider>
      {/* </ThemeProvider> */}
    </PlayProvider>
  );
};

export default Play;
