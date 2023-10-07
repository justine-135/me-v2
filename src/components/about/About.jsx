import Story from "./Story";
import Experience from "./Experience";
import Technology from "./Technology";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element
      className="flex justify-center items-center"
      id="about-section"
      name="about-section"
    >
      <div className="w-11/12 md:w-2/4 max-w-[550px]">
        <h3 className="font-extrabold text-xl dark:text-darkH text-center sm:text-left">
          About 👨‍🎓
        </h3>
        <div className="flex flex-col gap-12 my-6 sm:my-10 ">
          <Story />
          <Technology />
          <Experience />
        </div>
      </div>
    </Element>
  );
};

export default About;
