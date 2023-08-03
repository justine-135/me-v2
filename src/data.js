const repos = [
  {
    name: "Motion Capture",
    subname: "Web development final project",
    route: "web_final",
    type: "highlight",
    body: "The NextJS-based frontend offers a user-friendly interface for easy access and control of motion capture functionality, while the NodeJS backend manages data processing, storage, and communication with the Python-based camera module.",
    createdAt: "2023-01-16",
    introText: "as dljasd klasdljka ssjdalk ",
    roles: [
      {
        name: "Lead Developer",
      },
    ],
    responsibilities: [
      {
        name: "Backend Developer",
      },
      {
        name: "UI design",
      },
    ],
    team: [
      {
        name: "Richard manipon",
      },
      {
        name: "Daryl Magpantay",
      },
      {
        name: "Louise Yagi",
      },
      {
        name: "James Ferrer",
      },
    ],
    languages: [
      {
        name: "NextJS",
        bg: "#93c5fd",
      },
      {
        name: "Python",
        bg: "#6ee7b7",
      },
      {
        name: "NodeJS",
        bg: "#6ee7b7",
      },
      {
        name: "MySQL",
        bg: "#fde047",
      },
    ],
    repoUrl: "https://github.com/justine-135/cpet17-finals",
    liveUrl: "",
  },
  {
    name: "Blog Posting Site",
    type: "other",
    body: "The MERN-based blog web app offers users a seamless, modern platform to create, manage, and share dynamic blog posts worldwide.",
    createdAt: "2023-07-22",
    languages: [
      {
        name: "ReactJS",
        bg: "#a5b4fc",
      },
      {
        name: "Sass",
        bg: "#fda4af",
      },
      {
        name: "NodeJS",
        bg: "#6ee7b7",
      },
      {
        name: "MongoDB",
        bg: "#86efac",
      },
    ],
    repoUrl: "https://github.com/justine-135/mern-crud",
    liveUrl: "",
  },
  {
    name: "Interactive Pricing Component",
    type: "other",
    body: "Build an interactive pricing component complete with custom range input slider and pricing toggle. A perfect way to test my JS skills.",
    createdAt: "2023-07-17",
    languages: [
      {
        name: "ReactJS",
        bg: "#a5b4fc",
      },
      {
        name: "Sass",
        bg: "#fda4af",
      },
    ],
    repoUrl: "https://github.com/justine-135/interactive-pricing-component",
    liveUrl: "https://justine-135.github.io/interactive-pricing-component/",
  },
  {
    name: "Static Job Listings",
    type: "other",
    body: "Using JavaScript to filter out jobs based on selected categories. Provided a local JSON file to help practice working with JSON data.",
    createdAt: "2023-07-16",
    languages: [
      {
        name: "ReactJS",
        bg: "#a5b4fc",
      },
      {
        name: "TailwindCSS",
        bg: "#7dd3fc",
      },
    ],
    repoUrl: "https://github.com/justine-135/static-job-listings",
    liveUrl: "https://justine-135.github.io/static-job-listings/",
  },
  {
    name: "React Countries",
    type: "other",
    body: "Test my JavaScript skills for this challenge. Use React and Axios to pull data from the REST Countries API.",
    createdAt: "2023-07-15",
    languages: [
      {
        name: "ReactJS",
        bg: "#a5b4fc",
      },
      {
        name: "TailwindCSS",
        bg: "#7dd3fc",
      },
      {
        name: "API",
        bg: "#d8b4fe",
      },
    ],
    repoUrl: "https://github.com/justine-135/react-countries",
    liveUrl: "https://justine-135.github.io/react-countries/",
  },
  {
    name: "Student Record System",
    subname: "Intern project",
    route: "intern_project",
    type: "highlight",
    body: "Platform designed to securely store, manage, and organize student-related information and data, including academic records, grades, and personal details.",
    createdAt: "2023-03-27",
    introText: "as dljasd klasdljka ssjdalk ",
    roles: [
      {
        name: "Lead Developer",
      },
    ],
    responsibilities: [
      {
        name: "Fullstack Developer",
      },
    ],
    team: [
      {
        name: "Daryl Magpantay",
      },
    ],
    languages: [
      {
        name: "PHP",
        bg: "#a5b4fc",
      },
      {
        name: "Javascript",
        bg: "#fcd34d",
      },
      {
        name: "CSS",
        bg: "#7dd3fc",
      },
      {
        name: "MySQL",
        bg: "#fde047",
      },
    ],
    repoUrl: "https://github.com/justine-135/School-record-management-system",
    liveUrl: "",
  },
  {
    name: "Restaurant Ordering System",
    subname: "Research final project",
    route: "research_project",
    type: "highlight",
    body: "With its user-friendly interface and efficient order management, the samgyupsal ordering system web app enhances customer satisfaction and helps restaurant owners optimize their operations for a smoother and more delightful dining experience.",
    createdAt: "2022-08-09",
    introText: "as dljasd klasdljka ssjdalk ",
    roles: [
      {
        name: "Lead Developer",
      },
    ],
    responsibilities: [
      {
        name: "Fullstack Developer",
      },
      {
        name: "UI design",
      },
    ],
    team: [
      {
        name: "Richard manipon",
      },
      {
        name: "Daryl Magpantay",
      },
      {
        name: "Louise Yagi",
      },
      {
        name: "James Ferrer",
      },
    ],
    features: [
      {
        text: "",
      },
    ],
    languages: [
      {
        name: "PHP",
        bg: "#a5b4fc",
      },
      {
        name: "Javascript",
        bg: "#fcd34d",
      },
      {
        name: "CSS",
        bg: "#7dd3fc",
      },
      {
        name: "MySQL",
        bg: "#fde047",
      },
    ],
    repoUrl: "https://github.com/justine-135/dadz-grill-thesis",
    liveUrl: "",
  },
  // {
  //   name: "School Canteen Ordering System",
  //   type: "highlight",
  //   body: "The canteen ordering system web app built with Django optimizes the food ordering process, enhancing customer satisfaction and operational efficiency in canteen environments.",
  //   createdAt: "2021-10-23",
  //   languages: [
  //     {
  //       name: "Django",
  //       bg: "#6ee7b7",
  //     },
  //     {
  //       name: "Javascript",
  //       bg: "#fcd34d",
  //     },
  //     {
  //       name: "CSS",
  //       bg: "#7dd3fc",
  //     },
  //     {
  //       name: "MySQL",
  //       bg: "#fde047",
  //     },
  //   ],
  //   repoUrl: "https://github.com/justine-135/Tupc-Ecafeteria-Django-ver",
  //   liveUrl: "",
  // },
  {
    name: "To Do List - DnD",
    type: "other",
    body: "React to do list with drag and drop functionality. Used react-beautiful-dnd to enable drag and drop.",
    createdAt: "2023-07-12",
    languages: [
      {
        name: "ReactJS",
        bg: "#a5b4fc",
      },
      {
        name: "Styled Components",
        bg: "#fdba74",
      },
    ],
    repoUrl: "https://github.com/justine-135/react-todo-dnd",
    liveUrl: "https://justine-135.github.io/react-todo-dnd/",
  },
  {
    name: "Frontend Task",
    type: "other",
    body: "My first freelance task is to build a similar design to stackoverflow but simpler using Bootstrap5.",
    createdAt: "2021-09-14",
    languages: [
      {
        name: "HTML",
        bg: "#fdba74",
      },
      {
        name: "Bootstrap",
        bg: "#c084fc",
      },
    ],
    repoUrl: "https://github.com/justine-135/TestStack",
    liveUrl: "https://justine-135.github.io/TestStack/",
  },
  {
    name: "Maze game",
    type: "other",
    body: "My own scary maze game to try out with friends. The idea and concept was based on the popular maze game.",
    createdAt: "2021-10-30",
    languages: [
      {
        name: "HTML",
        bg: "#fdba74",
      },
      {
        name: "CSS",
        bg: "#7dd3fc",
      },
      {
        name: "Javascript",
        bg: "#fcd34d",
      },
    ],
    repoUrl: "https://github.com/justine-135/maze-game",
    liveUrl: "https://justine-135.github.io/maze-game/",
  },
  {
    name: "Bookmark Website",
    type: "other",
    body: "A frontend mentor challenge that test layout skills. There are also areas that will require some JavaScript, such as the tabbed features section and the FAQ accordion.",
    createdAt: "2021-09-11",
    languages: [
      {
        name: "ReactJS",
        bg: "#a5b4fc",
      },
      {
        name: "Sass",
        bg: "#fda4af",
      },
    ],
    repoUrl: "https://github.com/justine-135/Bookmark",
    liveUrl: "https://justine-135.github.io/Bookmark/",
  },
  {
    name: "Todo list",
    type: "other",
    body: "Intermediate frontend mentor challange. Todo list with filter data functionality and animation.",
    createdAt: "2021-08-25",
    languages: [
      {
        name: "ReactJS",
        bg: "#a5b4fc",
      },
      {
        name: "Sass",
        bg: "#fda4af",
      },
    ],
    repoUrl: "https://github.com/justine-135/Todo",
    liveUrl: "https://justine-135.github.io/Todo/",
  },
  {
    name: "Food Recipe App",
    type: "other",
    body: "Display food recipe from an API called edamam. Used Axios to access the endpoints.",
    createdAt: "2021-08-09",
    languages: [
      {
        name: "ReactJS",
        bg: "#a5b4fc",
      },
      {
        name: "API",
        bg: "#d8b4fe",
      },
      {
        name: "CSS",
        bg: "#7dd3fc",
      },
    ],
    repoUrl: "https://github.com/justine-135/food-recipe-app",
    liveUrl: "https://justine-135.github.io/food-recipe-app/",
  },
  {
    name: "Rock Paper Scissor",
    type: "other",
    body: "Rock paper scissor game using pure HTML, CSS, and Javascript.",
    createdAt: "2021-07-23",
    languages: [
      {
        name: "HTML",
        bg: "#fdba74",
      },
      {
        name: "CSS",
        bg: "#7dd3fc",
      },
      {
        name: "Javascript",
        bg: "#fcd34d",
      },
    ],
    repoUrl: "https://github.com/justine-135/bato-bato-pick",
    liveUrl: "https://justine-135.github.io/bato-bato-pick/",
  },
  {
    name: "Facebook Dropdown Menu",
    type: "other",
    body: "Re-created the old facebook dropdown menu using HTML, CSS, and Javascript",
    createdAt: "2021-07-23",
    languages: [
      {
        name: "HTML",
        bg: "#fdba74",
      },
      {
        name: "CSS",
        bg: "#7dd3fc",
      },
      {
        name: "Javascript",
        bg: "#fcd34d",
      },
    ],
    repoUrl: "https://github.com/justine-135/dropdown-button",
    liveUrl: "https://justine-135.github.io/dropdown-button/",
  },
  {
    name: "Card Hover",
    type: "other",
    body: "Simple card collection with hover animation.",
    createdAt: "2021-07-23",
    languages: [
      {
        name: "HTML",
        bg: "#fdba74",
      },
      {
        name: "CSS",
        bg: "#7dd3fc",
      },
      {
        name: "Javascript",
        bg: "#fcd34d",
      },
    ],
    repoUrl: "https://github.com/justine-135/card-system",
    liveUrl: "https://justine-miniproject-cardsystem.netlify.app/",
  },
  {
    name: "Landing Page Animation",
    type: "other",
    body: "Simple landing page animation using GSAP library.",
    createdAt: "2021-05-11",
    languages: [
      {
        name: "HTML",
        bg: "#fdba74",
      },
      {
        name: "CSS",
        bg: "#7dd3fc",
      },
      {
        name: "Javascript",
        bg: "#fcd34d",
      },
    ],
    repoUrl: "https://github.com/justine-135/first-gsap-animation",
    liveUrl: "https://justine-135.github.io/first-gsap-animation/",
  },
];

const technologies = [
  {
    title: "Design",
    underline: "#fef08a",
    techs: ["Figma", "Photoshop"],
  },
  {
    title: "Frontend",
    underline: "#fde68a",
    techs: ["React", "Tailwind", "Sass", "Bootstrap"],
  },
  {
    title: "Backend",
    underline: "#bae6fd",
    techs: ["PHP", "NodeJS", "Python"],
  },
  {
    title: "Database",
    underline: "#bbf7d0",
    techs: ["MySQL", "MongoDB"],
  },
  {
    title: "Version control",
    underline: "#c4b5fd",
    techs: ["Github", "Git"],
  },
];

const experiences = [
  {
    position: "Intern Computer Technologist",
    company: "Sabang Elementary School",
    url: "https://sabes.depeddasma.edu.ph/",
    startDate: "2023-03",
    endDate: "2023-06",
    achievements: [
      {
        text: "Developed a web-based learning system for teachers and school admins. It does a lot by managaging student data, like grades, and personal info. Plus, there's a grading system to make it easy for teachers to assess students' progress accurately.",
      },
      {
        text: "Conceptualized and designed a mini hydroponics system just for growing lettuces in the school garden. We used a special water solution full of nutrients to grow really healthy and green lettuces. It's a sustainable and eco-friendly way to garden right at school.",
      },
    ],
  },
  {
    position: "Computer Engineer Technologist",
    company: "Technological University of the Philippines - Cavite Campus",
    url: "https://www.tupcavite.edu.ph/",
    startDate: "2019-05",
    endDate: "Present",
    achievements: [
      {
        text: "For our research project, me and my team created an online ordering system called Dad'z GrillHouse for a local samgyupsal (Korean BBQ) restaurant. Customers can order their food online, and the restaurant staff can easily keep track of the orders using a smart caller device. It makes the dining experience so much smoother and better.",
      },
      {
        text: "In our fourth year, we developed web-based motion capture system using a regular webcam and Python. With this new technology, users can capture and analyze motion data for all kinds of uses. It's a versatile and easy-to-use tool.",
      },
      {
        text: "During our web development class, we developed a canteen ordering system to make it easy for students and staff to order meals. It's a user-friendly web app with a simple interface. People can browse the menu, pick what they want, and place orders smoothly. This system helps the canteen staff work better, manage orders accurately, and makes eating at school a breeze for everyone.",
      },
    ],
  },
];

const data = { repos, technologies, experiences };

export default data;
