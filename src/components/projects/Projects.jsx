import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";
import { Element } from "react-scroll";
import data from "../../data";
import Project from "./Project";
import Highlight from "./Highlight";

const Projects = () => {
  const projects = data.repos;

  const hightlightData = projects.filter((item) => item.type === "highlight");
  const personalData = projects.filter((item) => item.type === "other");

  const [activeHighlight, setActiveHighlight] = useState(true);
  const [activePersonal, setActivePersonal] = useState(false);
  const [activeAll, setActiveAll] = useState(false);
  const [sortedProjects, setSortedProjects] = useState(null);

  const [limit, setLimit] = useState(5);

  useEffect(() => {
    if (activeHighlight) {
      setSortedProjects(
        hightlightData.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      );
      return;
    }
    if (activePersonal) {
      setSortedProjects(
        personalData.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      );
      return;
    }
    if (activeAll) {
      setSortedProjects(
        projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
      return;
    }
  }, [activeHighlight, activePersonal, activeAll]);

  const handleActiveHighlight = () => {
    setActiveHighlight(true);
    setActivePersonal(false);
    setActiveAll(false);
    setLimit(5);
  };
  const handleActivePersonal = () => {
    setActiveHighlight(false);
    setActivePersonal(true);
    setActiveAll(false);
    setLimit(5);
  };
  const handleActiveAll = () => {
    setActiveHighlight(false);
    setActivePersonal(false);
    setActiveAll(true);
    setLimit(5);
  };

  return (
    <Element
      className="flex justify-center items-center my-20 sm:my-32"
      id="projects-section"
      name="projects-section"
    >
      <div className="flex justify-between w-11/12 md:w-2/4 max-w-[550px]">
        <div className="flex flex-col items-center gap-2 w-full sm:items-start">
          <HeadShake>
            <h4 className="font-extrabold text-xl dark:text-darkH text-center sm:text-left">
              Projects 💻
            </h4>
          </HeadShake>
          <div className="flex mb-6 mt-4">
            <button
              className={`pl-1 pr-5 font-bold border-b-4 dark:text-darkH ${
                activeHighlight
                  ? " border-[#0ea5e9]"
                  : "border-[#d1d5db] dark:border-[#164e63]"
              }`}
              onClick={handleActiveHighlight}
            >
              Highlight
            </button>
            <button
              className={`pl-1 pr-5 font-bold border-b-4 dark:text-darkH ${
                activePersonal
                  ? " border-[#0ea5e9]"
                  : "border-[#d1d5db] dark:border-[#164e63]"
              }`}
              onClick={handleActivePersonal}
            >
              Sides
            </button>
            {/* <button
              className={`pl-1 pr-5 font-bold border-b-4 dark:text-darkH ${
                activeAll
                  ? " border-[#0ea5e9]"
                  : "border-[#d1d5db] dark:border-[#164e63]"
              }`}
              onClick={handleActiveAll}
            >
              All
            </button> */}
          </div>
          <div className="flex flex-col items-center gap-10">
            <div
              className={`grid gap-8 w-full ${
                activePersonal && "md:grid-cols-2"
              }`}
            >
              {sortedProjects &&
                sortedProjects.slice(0, limit).map((repo, index) => {
                  if (activePersonal) {
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
