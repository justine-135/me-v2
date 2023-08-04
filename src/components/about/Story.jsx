import Fade from "react-reveal/Fade";

const Story = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <Fade delay={300}>
        <p className="text-sm text-title-sm text-center mb-8 sm:mb-4 sm:text-left dark:text-darkP">
          / Story
        </p>
      </Fade>
      <div className="font-josefin flex flex-col gap-2 w-full text-p md:w-4/5 text-sm sm:text-base text-justify sm:text-left">
        <Fade left>
          <p className="dark:text-darkP">
            As a soon-to-be graduate, I love technology and solving problems.
            I've focused on software development during my studies, working with
            programming languages like Javascript, PHP, and Python, as well as
            web technologies. I've done many projects that prove I can create
            smart and creative solutions.
          </p>
        </Fade>
        <Fade left>
          <p className="dark:text-darkP">
            I'm eager to begin my journey as a software developer and put my
            theoretical knowledge into practice. Collaborating with experienced
            teams, I aim to enhance my skills and grow professionally.
            Excitement drives me as I step into the world of practical scenarios
            and professional growth.
          </p>
        </Fade>
        <Fade left>
          <p className="dark:text-darkP">
            In the future, I'm determined to level up my expertise and stay
            updated with the latest technologies. I want to create cutting-edge
            software that makes a positive impact on people's lives. Embracing
            every chance to learn and grow, I aim to become an influential and
            skilled software developer in the industry.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Story;
