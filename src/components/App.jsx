import About from "./about/About";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./projects/Projects";
import { useState, useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState(null);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <main className="App font-encode dark:bg-darkBg">
      <div
        className={`${
          menu
            ? "fixed w-full h-screen blur-3xl bg-white/90 dark:bg-darkBg/90 z-40"
            : "hidden"
        }`}
      ></div>
      <Navbar theme={theme} setTheme={setTheme} menu={menu} setMenu={setMenu} />
      <Home />
      <About />
      <Projects />
      <Footer />
    </main>
  );
};

export default App;
