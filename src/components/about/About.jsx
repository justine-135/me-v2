import Story from "./Story";
import Experience from "./Experience";
import Technology from "./Technology";
import SectionHeading1 from "../common/HeadingText";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element
      className="flex justify-center items-center"
      id="about-section"
      name="about-section"
    >
      <section className="w-11/12 md:w-2/4 max-w-[550px]">
        <SectionHeading1 heading="2xl"> About 👨‍🎓</SectionHeading1>
        <div className="flex flex-col gap-12 my-6 sm:my-10 ">
          <Story />
          <Technology />
          <Experience />
        </div>
      </section>
    </Element>
  );
};

export default About;
