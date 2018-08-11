import React from "react";
import { ThemeProvider } from "emotion-theming";
import { MDXProvider } from "@mdx-js/tag";
import * as mdComponents from "./components";
import theme from "./theme";

import { PlayProvider } from "./PlayContext";

const Play = ({ children, components, options }) => {
  return (
    <PlayProvider components={components} options={options}>
      <ThemeProvider theme={{ styleguide: theme }}>
        <MDXProvider components={mdComponents}>{children}</MDXProvider>
      </ThemeProvider>
    </PlayProvider>
  );
};

export default Play;
