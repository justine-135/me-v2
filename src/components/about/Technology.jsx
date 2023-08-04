import { ReactComponent as ArrowRight } from "../../images/rightArrow.svg";
import Fade from "react-reveal/Fade";
import data from "../../data";

const Technology = () => {
  const technologies = data.technologies;

  return (
    <div className="flex flex-col md:flex-row justify-between">
      <Fade delay={300}>
        <p className="text-sm text-title-sm text-center mb-10 sm:mb-4 sm:text-left dark:text-darkP">
          / Technology
        </p>
      </Fade>
      <div className="flex flex-col gap-2 w-full md:w-4/5 text-p dark:text-darkP text-sm sm:text-base text-justify sm:text-left">
        <Fade left>
          <p className="font-josefin">
            I used various tools for web development, including UI design,
            server-side apps, database management, and version control for team.
          </p>
        </Fade>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {technologies.map((technology, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <h6
                  className="font-bold text-sm text-black mb-2 py-2 dark:text-darkH"
                  style={{
                    borderBottom: `2px solid ${technology.underline}`,
                  }}
                >
                  {technology.title}
                </h6>
                <ul className="flex flex-col">
                  {technology.techs.map((tech, index) => {
                    return (
                      <Fade bottom key={index}>
                        <li className="flex items-center gap-2 text-sm">
                          <ArrowRight className="h-2 w-2 fill-slate-900 dark:fill-darkH" />
                          {tech}
                        </li>
                      </Fade>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technology;
