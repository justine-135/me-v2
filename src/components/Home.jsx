import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";
import { ReactComponent as Facebook } from "../images/facebook.svg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="flex justify-center items-center h-screen" id="home-section" name="home-section">
      <div className="flex justify-between w-11/12 md:w-2/4 max-w-[550px]">
        <div className="flex flex-col items-center sm:items-start gap-2 w-full md:w-3/4">
          <TypeAnimation
            sequence={[
              "Hey there, coding champs 🐱‍💻",
              1000,
              "Hey there, coding gurus 🐱‍👤",
              1000,
              "Hey there, coding pros 🐱‍🏍",
              1000,
              "Hey there, coding maestros 🐱‍🚀",
              1000,
            ]}
            wrapper="span"
            speed={40}
            deletionSpeed={70}
            repeat={Infinity}
            className="font-extrabold text-xl dark:text-darkH text-center sm:text-left"
          />
          <p className="font-josefin text-p dark:text-darkP text-center text-sm sm:text-base sm:text-left">
            I'm Justine Upano, a web developer.
          </p>
          <p className="font-josefin text-p dark:text-darkP text-center text-sm sm:text-base sm:text-left">
            I am a Computer Engineering Technology major in{" "}
            <a
              className="font-semibold text-black dark:text-darkH"
              href="https://www.tupcavite.edu.ph/"
              target="_blank"
              rel="noreferrer"
            >
              Technical University of the Philippines
            </a>
            . With my graduation just around the corner, I'm ready to conquer
            the tech world.
          </p>
          <ul className="flex gap-2 mt-5 sm:mt-2">
            <li className="hover:-mt-1 duration-75">
              <a
                href="https://github.com/justine-135"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-6 w-6 dark:fill-darkH" />
              </a>
            </li>
            <li className="hover:-mt-1 duration-75">
              <a
                href="https://www.linkedin.com/in/justineupano/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-6 w-6 dark:fill-darkH" />
              </a>
            </li>
            <li className="hover:-mt-1 duration-75">
              <a
                href="https://www.facebook.com/profile.php?id=100082307987587"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="h-6 w-6 dark:fill-darkH" />
              </a>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-2 mt-5">
            <a
              href="https://drive.google.com/file/d/1eo4v9gSWjxL97iuzJkJYmeq-xdNqbrNz/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="font-bold px-4 py-0 rounded-sm border-black border-2 hover:bg-orange-600 hover:border-orange-600 ease-in duration-75 dark:border-darkP dark:text-darkP dark:hover:border-orange-600 dark:hover:text-darkH"
            >
              ✉️ Resume
            </a>
            <button
              className="font-bold px-4 py-0 rounded-sm border-black border-2 hover:bg-sky-600 hover:border-sky-600 ease-in duration-75 dark:border-darkP dark:text-darkP dark:hover:border-sky-600 dark:hover:text-darkH"
              onClick={() =>
                (window.location.href = "mailto:justineupano87@gmail.com")
              }
            >
              👋 Say hi!
            </button>
          </div>
        </div>
        <img
          className="hidden sm:block h-[120px] w-[120px] rounded-full"
          src={require("../images/cute_dev.png")}
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;
