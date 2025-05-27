// src/hooks/useTheme.js
import { useState, useEffect } from "react";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for a saved theme, default to 'light'
    const savedTheme = localStorage.getItem("theme");
    // Check user's system preference for dark mode if no theme is saved
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Effect to update the 'theme' class on the documentElement (<html>)
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return [theme, toggleTheme];
}

export default useTheme;
