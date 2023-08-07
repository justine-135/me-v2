import Footer from "./partials/Footer";
import Navbar from "./partials/Navbar";
import Home from "./Home";
import Overlay from "./partials/Overlay";
import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Id from "./projects/Id";
import Page404 from "./Page404";

const App = () => {
  const [theme, setTheme] = useState(null);
  const [menu, setMenu] = useState(false);
  const [isHome, setIsHome] = useState(false);

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
    <main className="App font-encode min-h-screen grid dark:bg-darkBg">
      <Overlay menu={menu} />

      <Router>
        <Navbar
          theme={theme}
          setTheme={setTheme}
          menu={menu}
          setMenu={setMenu}
          isHome={isHome}
        />
        <Routes>
          <Route index path="/" element={<Home setIsHome={setIsHome} />} />
          <Route
            path="/projects/:route"
            element={<Id setIsHome={setIsHome} />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
      <Footer className="mt-auto" />
    </main>
  );
};

export default App;
