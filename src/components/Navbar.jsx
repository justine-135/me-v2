import { ReactComponent as Moon } from "../images/moon.svg";
import { ReactComponent as Menu } from "../images/menu.svg";
import { ReactComponent as Exit } from "../images/exit.svg";
import Fade from "react-reveal/Fade";
import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import useScrollBlock from "../useScrollBlock";

const Navbar = ({ theme, setTheme, menu, setMenu }) => {
  const [blockScroll, allowScroll] = useScrollBlock();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const animateMenu = useSpring({
    from: { right: "-100%" },
    to: { right: menu && windowSize < 768 ? "0%" : "-100%" },
  });

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize >= 768) {
      setTheme(false);
      setMenu(false);
      allowScroll();
    }
  }, [windowSize]);

  const handleOpenMenu = () => {
    setMenu(true);
    blockScroll();
  };

  const handleCloseMenu = () => {
    setMenu(false);
    allowScroll();
  };

  return (
    <div>
      <div className="fixed -top-5 h-20 w-full blur-md md:blur-none bg-white dark:bg-darkBg md:bg-transparent md:dark:bg-transparent z-10"></div>
      <nav className="fixed top-0 flex justify-center w-full bg-transparent h-16 z-20 md:hidden">
        <div className="flex justify-between items-center w-11/12">
          <div className="font-extrabold text-xl dark:text-darkH">
            Justine's Hub
          </div>
          <button className="" onClick={handleOpenMenu}>
            <Menu className="h-8 w-8 dark:fill-darkH" />
          </button>
        </div>
      </nav>

      <animated.nav
        className={`fixed top-0 md:right-0 flex items-center justify-center w-4/5 drop-shadow-md md:drop-shadow-none md:w-full h-screen md:h-20 bg-white dark:bg-darkBg md:bg-transparent md:dark:bg-transparent ease-out duration-100 z-50`}
        style={windowSize < 768 ? animateMenu : null}
      >
        <button
          className="absolute top-0 p-7 md:hidden"
          onClick={handleCloseMenu}
        >
          <Exit className="h-8 w-8 dark:fill-darkH" />
        </button>
        <div className="flex flex-col md:flex-row items-center justify-between w-11/12 max-w-[1156px]">
          <p className="hidden md:block font-extrabold text-xl dark:text-darkH">
            Justine's Hub
          </p>
          <Fade cascade right when={windowSize < 768 ? menu : true}>
            <ul className="flex flex-col items-center md:items-start font-semibold md:flex-row gap-6 dark:text-darkP">
              <li>
                <button
                  className="cursor-pointer hover:fill-darkBg"
                  onClick={handleThemeSwitch}
                >
                  <Moon className="h-6 w-6 pointer-events-none dark:fill-darkH" />
                </button>
              </li>
              <li>
                <Link
                  to="about-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                  onClick={handleCloseMenu}
                >
                  🐱‍👓 About
                </Link>
              </li>
              <li>
                <Link
                  to="projects-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                  onClick={handleCloseMenu}
                >
                  💻 Projects
                </Link>
              </li>
            </ul>
          </Fade>
        </div>
      </animated.nav>
    </div>
  );
};

export default Navbar;
