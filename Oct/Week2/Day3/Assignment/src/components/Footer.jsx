import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className="footer">
      <p>
        © 2026 ThemeApp | Current Theme: {theme}
      </p>
      <p>Built with React Context API</p>
    </footer>
  );
}

export default Footer;