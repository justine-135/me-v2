import { ReactComponent as Folder } from "../../images/folder.svg";
import { ReactComponent as Github } from "../../images/github.svg";
import { ReactComponent as Live } from "../../images/live.svg";
import { Link } from "react-router-dom";

const Project = ({ repo }) => {
  return (
    <div className="cursor-default p-4 rounded-md border-2 border-slate-50 dark:border-darkBorder hover:border-slate-300 dark:hover:border-darkBorderHover ease-linear duration-75">
      <div className="flex flex-col">
        <span className="text-xs text-title-sm">/ {repo.createdAt}</span>
        <div>
          <div className="flex items-center justify-between h-14">
            <Folder className="h-7 w-7 fill-slate-900 dark:fill-darkBorderHover" />
            <ul className="flex gap-x-2">
              <li>
                <a
                  className="py-1 px-2"
                  href={repo.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-7 w-7 fill-slate-900 hover:fill-slate-500 dark:fill-darkBorderHover" />
                </a>
              </li>
              {repo.liveUrl && (
                <li>
                  <a
                    className="py-1 px-2"
                    href={repo.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Live className="h-7 w-7 fill-slate-900 dark:fill-darkBorderHover" />
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-2">
            <h5 className="font-bold dark:text-darkH">{repo.name} -</h5>
            <span className="dark:text-darkH">{repo.subname}</span>
          </div>

          <p className="font-josefin text-p mt-2 mb-5 dark:text-darkP text-sm sm:text-base">
            {repo.body}
          </p>
          <div className="flex items-start gap-2 justify-between flex-col sm:flex-row sm:gap-0">
            <ul className="flex flex-wrap gap-2 w-4/5">
              {repo.languages.map((language, index) => {
                return (
                  <li
                    key={index}
                    className="text-xs py-1 px-2 rounded-md font-bold"
                    style={{ background: language.bg }}
                  >
                    {language.name}
                  </li>
                );
              })}
            </ul>
            <Link
              className="px-2 border-2 border-black rounded-md font-semibold hover:bg-black hover:text-white hover:border-white dark:bg-darkBg dark:border-darkH dark:text-darkH dark:hover:bg-darkH dark:hover:text-darkBg duration-75"
              to={`/projects/${repo.route}`}
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
