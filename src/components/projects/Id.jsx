import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data";
import ScrollTopButton from "../partials/ScrollTopButton";

const Id = ({ setIsHome }) => {
  const { route } = useParams();
  const projects = data.repos;
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    setIsHome(false);
    setRepos(projects);
  });

  return (
    <div className="flex items-center justify-center w-full">
      <ScrollTopButton />
      <div className="mt-24 md:w-3/5">
        {repos &&
          repos.map((repo, index) => {
            if (repo.route === route) {
              return (
                <div className="" key={index}>
                  <div className="grid place-items-center">
                    <div
                      className=" w-4/5"
                      id="landing-section"
                      name="landing-section"
                    >
                      <h1 className="text-3xl font-bold">{repo.name}</h1>
                      <p className="my-5 text-p">{repo.introText}</p>
                    </div>
                    <div className="flex justify-center gap-12 w-4/5">
                      <div>
                        <h5 className="font-semibold">Role</h5>
                        <ul className="mt-1">
                          {repo.roles.map((role, index) => {
                            return <li key={index}>{role.name}</li>;
                          })}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold">Responsibilities</h5>
                        <ul className="mt-1">
                          {repo.responsibilities.map(
                            (responsibility, index) => {
                              return <li key={index}>{responsibility.name}</li>;
                            }
                          )}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold">Team</h5>
                        <ul className="mt-1">
                          {repo.teams.map((team, index) => {
                            return <li key={index}>{team.name}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid place-items-center gap-4 my-12 ">
                    <div className="p-5 bg-red-100 rounded-lg w-4/5">
                      <h5 className="font-semibold">Problem</h5>
                      <p className="text-p">{repo.problem}</p>
                    </div>
                    <div className="p-5 bg-sky-100 rounded-lg w-4/5">
                      <h5 className="font-semibold">Answer</h5>
                      <p className="text-p">{repo.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-5 text-xl font-bold">Features</h3>
                    <div className="grid">
                      {repo.features.map((feature, index) => {
                        return (
                          <div className="mb-12" key={index}>
                            <div>
                              <img
                                className="w-full rounded-lg shadow-md hover:shadow-lg duration-75 py-5"
                                src={require(`../../images/${route}/${feature.img}`)}
                                alt="prototype"
                              />

                              <p className="mt-2 text-p">{feature.body}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {repo.otherImages && (
                    <div>
                      <h3 className="mb-5 text-xl font-bold">Gallery</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {repo.otherImages.map((other, index) => {
                          return (
                            <div key={index}>
                              <img
                                className=" rounded-lg shadow-md hover:shadow-lg duration-75 py-5"
                                src={require(`../../images/research_project/${other.img}`)}
                                alt="gallery"
                              />
                            </div>
                          );
                        })}
                      </div>
                      <img
                        className="mt-4 rounded-lg shadow-md hover:shadow-lg duration-75 py-5"
                        src={require(`../../images/research_project/${repo.finalImg}`)}
                        alt="group pic"
                      />
                    </div>
                  )}
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Id;
