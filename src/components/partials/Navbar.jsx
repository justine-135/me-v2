import { ReactComponent as Moon } from "../../images/moon.svg";
import { ReactComponent as Menu } from "../../images/menu.svg";
import { ReactComponent as Exit } from "../../images/exit.svg";
import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect, useCallback } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, Link } from "react-router-dom";
import useScrollBlock from "../../useScrollBlock";

const Navbar = ({ theme, setTheme, menu, setMenu, isHome }) => {
  const navigate = useNavigate();
  const [blockScroll, allowScroll] = useScrollBlock();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleCachedTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  const animateMenu = useSpring({
    from: { right: "-100%" },
    to: { right: menu && windowSize < 768 ? "0%" : "-100%" },
  });

  const nav = useSpring({
    from: { marginTop: "-100px", opacity: 0 },
    to: { marginTop: "0px", opacity: 1 },
    delay: 500,
  });

  const handleThemeSwitch = () => {
    handleCachedTheme();
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

  const handleBackButton = () => {
    handleCloseMenu();
    navigate(-1);
  };

  const handleHomeBtn = () => {
    handleCloseMenu();
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="fixed -top-5 h-20 w-full blur-md md:blur-none bg-white dark:bg-darkBg md:bg-transparent md:dark:bg-transparent z-10"></div>
      <nav className="fixed top-0 flex justify-center w-full bg-transparent h-16 z-20 md:hidden">
        <div className="flex justify-between items-center w-11/12">
          <Link
            to="/"
            className="font-extrabold text-xl dark:text-darkH cursor-pointer"
            onClick={handleHomeBtn}
          >
            Justine's Hub
          </Link>
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
        <animated.div
          style={nav}
          className="flex flex-col md:flex-row items-center justify-between w-11/12 max-w-[1256px]"
        >
          <Link
            to="/"
            className="hidden md:block font-extrabold text-xl cursor-pointer dark:text-darkH"
            onClick={handleHomeBtn}
          >
            Justine's Hub
          </Link>
          <div>
            {isHome ? (
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
                  <ScrollLink
                    to="about-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={handleCloseMenu}
                  >
                    🐱‍👓 About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="projects-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    onClick={handleCloseMenu}
                  >
                    💻 Projects
                  </ScrollLink>
                </li>
              </ul>
            ) : (
              <div className="flex gap-4">
                <button
                  className="cursor-pointer hover:fill-darkBg"
                  onClick={handleThemeSwitch}
                >
                  <Moon className="h-6 w-6 pointer-events-none dark:fill-darkH" />
                </button>
                <button
                  className="font-semibold hover:underline hover:underline-offset-2 dark:text-darkP duration-75"
                  onClick={() => handleBackButton()}
                >
                  Go back
                </button>
              </div>
            )}
          </div>
        </animated.div>
      </animated.nav>
    </div>
  );
};

export default Navbar;
