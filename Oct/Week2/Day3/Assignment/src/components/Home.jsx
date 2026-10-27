import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className="home">
      <h1>
        Welcome to {theme === "light" ? "Light" : "Dark"} Mode!
      </h1>

     

      <div className="info-card">
        <h2>Current Theme</h2>
        <p>
          Your selected theme is: <strong>{theme.toUpperCase()}</strong>
        </p>
        
      </div>
    </main>
  );
}

export default Home;