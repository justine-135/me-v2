import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Link as ScrollLink } from "react-scroll";
import { ReactComponent as Arrow } from "../../images/rightArrow.svg";

const ScrollTopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(null);

  const handleScroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    setScrollPosition(scrollPercentRounded);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animateMenu = useSpring({
    from: { top: "100%", opacity: 0 },
    to: { top: scrollPosition ? "0" : "100%", opacity: 1 },
  });
  return (
    <div className="fixed bottom-10 right-4 md:right-10 h-12 w-12 md:h-16 md:w-16 rounded-full border-none overflow-hidden z-30">
      <animated.div
        className="absolute h-full w-full border-4 border-black dark:border-darkH rounded-full"
        style={animateMenu}
      >
        <ScrollLink
          to="landing-section"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Arrow className="absolute h-4 w-4 md:h-8 md:w-8 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 -rotate-90 cursor-pointer dark:fill-darkH" />
        </ScrollLink>
      </animated.div>
      <div
        className="absolute h-full w-full bg-white dark:bg-darkBg"
        style={{ transform: `translateY(${scrollPosition}%)` }}
      ></div>
    </div>
  );
};

export default ScrollTopButton;
