import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function changeTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <small role="button" onClick={changeTheme}>
      {theme === "light" ? "☾ Dark Mode" : "☀︎ Light Mode"}
    </small>
  );
};

export default ThemeSwitch;
