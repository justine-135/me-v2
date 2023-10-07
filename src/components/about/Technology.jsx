import { ReactComponent as ArrowRight } from "../../images/rightArrow.svg";
import SpanTitle from "../common/SubCategoryTitle";
import data from "../../data";

const Technology = () => {
  const technologies = data.technologies;

  return (
    <section>
      <SpanTitle>/ Tools and technologies</SpanTitle>
      <div className="flex flex-col gap-2 w-full text-p dark:text-darkP text-sm sm:text-base text-justify sm:text-left">
        <p className="font-josefin">
          I used various tools for web development, including UI design,
          server-side apps, database management, and version control for team.
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {technologies.map((technology, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <h6
                  className="font-bold text-black mb-2 py-2 dark:text-darkH"
                  style={{
                    borderBottom: `2px solid ${technology.underline}`,
                  }}
                >
                  {technology.title}
                </h6>
                <ul className="flex flex-col">
                  {technology.techs.map((tech, index) => {
                    return (
                      <li
                        className="flex items-center gap-2 text-sm"
                        key={index}
                      >
                        <ArrowRight className="h-2 w-2 fill-slate-900 dark:fill-darkH" />
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technology;
