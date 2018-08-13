import React from "react";

const ThemeContext = React.createContext();
const defaultOptions = { showPropsTable: true };

export const PlayProvider = ({ children, components, md, options = {} }) => {
  return (
    <ThemeContext.Provider
      value={{
        components,
        md,
        options: { ...options, ...defaultOptions }
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const PlayConsumer = ThemeContext.Consumer;
