import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Element } from "react-scroll";
import data from "../../data";
import Project from "./Project";
import Highlight from "./Highlight";

const Projects = () => {
  const projects = data.repos;

  const [sortedProjects, setSortedProjects] = useState(null);
  const [projectType, setProjectType] = useState("highlight");

  const [limit, setLimit] = useState(5);

  useEffect(() => {
    setSortedProjects(
      projects
        .filter((item) => item.type === projectType)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    );
  }, [projectType, projects]);

  const handleProjectTypeChange = (type) => {
    setLimit(5);
    setProjectType(type);
  };

  return (
    <Element
      className="flex justify-center items-center my-20 sm:my-32"
      id="projects-section"
      name="projects-section"
    >
      <div className="flex justify-between w-11/12 md:w-2/4 max-w-[550px]">
        <div className="flex flex-col items-center gap-2 w-full sm:items-start">
          <h4 className="font-extrabold text-xl dark:text-darkH text-center sm:text-left">
            Projects 💻
          </h4>

          <div className="flex mb-6 mt-4">
            <button
              className={`pl-1 pr-5 font-bold border-b-4 dark:text-darkH ${
                projectType === "highlight"
                  ? " border-[#0ea5e9]"
                  : "border-[#d1d5db] dark:border-[#164e63]"
              }`}
              onClick={() => handleProjectTypeChange("highlight")}
            >
              Highlight
            </button>
            <button
              className={`pl-1 pr-5 font-bold border-b-4 dark:text-darkH ${
                projectType === "sides"
                  ? " border-[#0ea5e9]"
                  : "border-[#d1d5db] dark:border-[#164e63]"
              }`}
              onClick={() => handleProjectTypeChange("sides")}
            >
              Sides
            </button>
            <button
              className={`pl-1 pr-5 font-bold border-b-4 dark:text-darkH ${
                projectType === "challenge"
                  ? " border-[#0ea5e9]"
                  : "border-[#d1d5db] dark:border-[#164e63]"
              }`}
              onClick={() => handleProjectTypeChange("challenge")}
            >
              Challenges
            </button>
          </div>
          <div className="flex flex-col items-center gap-10">
            <div
              className={`grid gap-8 w-full ${
                projectType !== "highlight" && "md:grid-cols-2"
              }`}
            >
              {sortedProjects &&
                sortedProjects.slice(0, limit).map((repo, index) => {
                  if (projectType !== "highlight") {
                    return (
                      <Fade bottom key={index}>
                        <Project repo={repo} />
                      </Fade>
                    );
                  }
                  return (
                    <Fade bottom key={index}>
                      <Highlight repo={repo} />
                    </Fade>
                  );
                })}
            </div>
            {sortedProjects && sortedProjects.length > limit && (
              <button
                className="underline dark:text-darkP hover:underline-offset-5 duration-75"
                onClick={() => setLimit(limit + 5)}
              >
                Show more
              </button>
            )}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
