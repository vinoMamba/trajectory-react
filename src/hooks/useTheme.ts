import { useState } from "react";

export type Theme = "light" | "dark" | "system";

export const useTheme = (defaultTheme: Theme = "system") => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  initTheme(theme);
  const changeTheme = (theme: Theme) => {
    window.localStorage.setItem("theme", theme);
    if (theme === "system") {
    }
  };
  return [theme, changeTheme];
}

function initTheme(theme: Theme) {
  const root = window.document.documentElement
  root.classList.remove("light", "dark", "system");
  root.classList.add(theme);
  window.localStorage.setItem("theme", theme);
}
