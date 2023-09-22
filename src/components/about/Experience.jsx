import { ReactComponent as ArrowRight } from "../../images/rightArrow.svg";
import data from "../../data";

const Experience = () => {
  const experiences = data.experiences;
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <p className="text-sm text-title-sm text-center mb-10 sm:mb-4 sm:text-left dark:text-darkP">
        / Experience
      </p>

      <div className="flex flex-col gap-5 w-full md:w-4/5 ">
        {experiences.map((exp, index) => {
          return (
            <div className="text-center sm:text-left" key={index}>
              <a
                href={exp.url}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-md text-black hover:underline dark:text-darkH"
              >
                {exp.company}
              </a>
              <p className="font-semibold dark:text-darkH">{exp.position}</p>
              <div className="my-2 text-xs text-p dark:text-darkP">
                <span>{exp.startDate}</span> - <span>{exp.endDate}</span>
              </div>
              <div className="flex flex-col gap-4 mt-2">
                {exp.achievements.map((achievement, index) => {
                  return (
                    <div
                      className="flex items-start justify-between gap-4"
                      key={index}
                    >
                      <ArrowRight className="h-2 w-2 fill-slate-900 mt-2 dark:fill-darkH" />
                      <p className="font-josefin text-p w-[98%] dark:text-darkP text-sm sm:text-base text-justify sm:text-left">
                        {achievement.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            // </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
