
import { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../ThemeContext";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>ThemeApp</h2>

      <div className="theme-buttons">
        <button
          className={theme === "light" ? "active" : ""}
          onClick={() => setTheme("light")}
        >
          <FiSun size={18} />
          Light Mode
        </button>

        <button
          className={theme === "dark" ? "active" : ""}
          onClick={() => setTheme("dark")}
        >
          <FiMoon size={18} />
          Dark Mode
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
