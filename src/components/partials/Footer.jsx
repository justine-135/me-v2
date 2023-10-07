import { ReactComponent as Github } from "../../images/github.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";
import { ReactComponent as Facebook } from "../../images/facebook.svg";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-8 w-full">
      <div className="flex flex-col md:flex-row gap-2 items-center w-2/4 max-w-[550px]">
        <p className="font-josefin text-p text-center text-sm sm:text-base sm:text-left dark:text-darkP">
          🧑‍💻 Built by Justine Upano.
        </p>
        <p className="font-josefin text-p text-sm sm:text-base sm:text-left dark:text-darkP">
          All rights reserved ©.
        </p>
        <ul className="md:ml-auto flex gap-4 mt-5 sm:mt-0">
          <li>
            <a
              href="https://github.com/justine-135"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-6 w-6 dark:fill-darkH" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/justineupano/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-6 w-6 dark:fill-darkH" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100082307987587"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="h-6 w-6 dark:fill-darkH" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
