// src/context/ThemeContext.jsx
import React, { createContext, useContext } from "react";
import useTheme from "../hooks/useTheme";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
