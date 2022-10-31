import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme } = useTheme();
  const lightOrDark = theme === "light" ? "bg-white" : "bg-secondary";

  return (
    <div
      className={`d-flex justify-content-between align-items-center p-4 ${lightOrDark} shadow-sm`}
      style={{ width: "100vw" }}
    >
      <p className="fw-bold">Where in the world?</p>
      <ThemeSwitch />
    </div>
  );
};

export default Header;
