import { useEffect, useState } from "react";

export const useDark = () => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const [dark, setDark] = useState(mediaQuery.matches);
  const root = document.documentElement;
  useEffect(() => {
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);
  const toggleDark = () => setDark((dark) => !dark);
  return [dark, toggleDark] as const;
}
