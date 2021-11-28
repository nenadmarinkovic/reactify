import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState();
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  var date = new Date();
  var hour = date.getHours();

  const toggleTheme = () => {
    if (theme === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    (!localTheme && hour >= 19) || hour <= 6
      ? setMode("dark")
      : localTheme
        ? setTheme(localTheme)
        : setMode("light");

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
