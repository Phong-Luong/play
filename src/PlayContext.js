import React from "react";
import { ThemeProvider } from "emotion-theming";
import { MDXProvider } from "@mdx-js/tag";
import * as mdComponents from "./components";
import theme from "./theme";

const ThemeContext = React.createContext();
const defaultOptions = { showPropsTable: true };

export const PlayProvider = ({ children, components, options = {} }) => {
  return (
    <ThemeContext.Provider
      value={{ components, options: { ...options, ...defaultOptions } }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const PlayConsumer = ThemeContext.Consumer;
