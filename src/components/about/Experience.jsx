import SpanTitle from "../common/SubCategoryTitle";
import HeadingText from "../common/HeadingText";
import data from "../../data";

const Experience = () => {
  const experiences = data.experiences;
  return (
    <section>
      <SpanTitle>/ Experience</SpanTitle>
      <div className="flex flex-col gap-8 w-full">
        {experiences.map((exp, index) => {
          return (
            <div className="text-center sm:text-left" key={exp.id}>
              <div className="flex justify-between items-center">
                <HeadingText heading="xl">{exp.position}</HeadingText>
                <div className="my-2 text-md text-p dark:text-darkP">
                  <span>{exp.startDate}</span> - <span>{exp.endDate}</span>
                </div>
              </div>
              <HeadingText heading="lg" link={exp.url}>
                {exp.company}
              </HeadingText>

              <div className="flex flex-col gap-4 mt-2">
                {exp.achievements ? (
                  exp.achievements?.map((achievement, index) => {
                    return (
                      <div
                        className="flex items-start justify-between gap-4"
                        key={index}
                      >
                        <p className="font-josefin text-p w-[98%] dark:text-darkP text-sm sm:text-base text-justify sm:text-left">
                          {achievement.text}
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <div className="font-josefin text-p w-[98%] dark:text-darkP text-sm sm:text-base text-justify sm:text-left italic">
                    Still under development .....
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
