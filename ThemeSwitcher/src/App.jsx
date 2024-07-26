import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const html = document.querySelector("html");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider
      value={{
        themeMode,
        lightTheme,
        darkTheme,
      }}
    >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4 "></div>
          <ThemeBtn />
          <div className="w-full max-w-sm mx-auto mt-4">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
