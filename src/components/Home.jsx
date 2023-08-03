import Landing from "./Landing";
import About from "./about/About";
import Projects from "./projects/Projects";
import ScrollTopButton from "./partials/ScrollTopButton";
import { useEffect } from "react";

const Home = ({ setIsHome }) => {
  useEffect(() => {
    setIsHome(true);
  });
  return (
    <div>
      <Landing />
      <About />
      <Projects />
      <ScrollTopButton />
    </div>
  );
};

export default Home;
