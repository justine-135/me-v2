const repos = [
  {
    name: "Motion Capture",
    subname: "Embedded System final project",
    route: "motion_capture",
    type: "highlight",
    body: "The NextJS-based frontend offers a user-friendly interface for easy access and control of motion capture functionality, while the NodeJS backend manages data processing, storage, and communication with the Python-based camera module.",
    createdAt: "2023-01-16",
    introText:
      "We developed a motion capture app using Python and NextJS for our final project in our subject Embedded Systems. We used Python with packages to enable movement sensing during oncam and call an API to record the start time, end time, and the captured image as BLOB file. To authenticate users to the web system, we used the NextAuth package and bcrypt to hash passwords to the database.",
    // problem:
    //   "Teachers often face a challenging task when searching for a student's document, as they navigate through stacks of papers, envelopes, and drawers. Additionally, the predicament extends to former students who lack saved information due to the unfortunate reality of lost documents.",
    // solution:
    //   "To address the issue, a web based student record system that provides a record-keeping with quick access to student documents, safe storage for current and past students, organized data, automated tasks, and better communication among everyone involved. This digital tool kicks out the old hassles of paper records, making data management accurate, communication effective, and decision-making smart in education.",
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
    teams: [
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
        body: "To access the web system, sign up and login.",
        img: "login.gif",
      },
      {
        body: "The homepage displays the screenshots of the images captured using python. Each row details displays the start and end time of the capture.",
        img: "home.gif",
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
    type: "sides",
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
    type: "challenge",
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
    type: "challenge",
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
    type: "challenge",
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
    route: "student_record_system",
    type: "highlight",
    body: "Platform designed to securely store, manage, and organize student-related information and data, including academic records, grades, and personal details.",
    createdAt: "2023-03-27",
    introText:
      "The challenges stemming from traditional student record-keeping methods arise from manual processes, disorganized data management, limited accessibility, and the potential for human errors. Relying on physical files or disjointed digital systems hampers efficiency, while disconnected departments lead to duplication and confusion. Restricted access based on physical proximity restricts timely communication, and manual data entry introduces inaccuracies. These issues collectively hinder effective record management and communication within educational institutions.",
    problem:
      "Teachers often face a challenging task when searching for a student's document, as they navigate through stacks of papers, envelopes, and drawers. Additionally, the predicament extends to former students who lack saved information due to the unfortunate reality of lost documents.",
    solution:
      "To address the issue, a web based student record system that provides a record-keeping with quick access to student documents, safe storage for current and past students, organized data, automated tasks, and better communication among everyone involved. This digital tool kicks out the old hassles of paper records, making data management accurate, communication effective, and decision-making smart in education.",
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
    teams: [
      {
        name: "Daryl Magpantay",
      },
    ],
    languages: [
      {
        name: "Bootstrap",
        bg: "#c084fc",
      },
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
    features: [
      {
        body: "To access the web system, user must fill up login form for validation and authentication.",
        img: "login.png",
      },
      {
        body: "Hompage displays advisory students and the user information. User can filter the students by selecting class from the select option.",
        img: "home.gif",
      },
      {
        body: "Each student's information are saved to the system. To view, go to the 'Enrolled students' or 'All students' tab and select student. The page displays the basic information, grades, and enrollment history of the student.",
        img: "students.gif",
      },
      {
        body: "*NOTE: In adding enrollment history, grade level and year cannot be existing to save the form.",
        img: "students_2.gif",
      },
      {
        body: "To grade a student, simply go to 'Grading' tab and select students to grade. A form modal will show to input grades of the student. A remark will display if student is ready for 'Promotion' on passing grades, 'Retention' for failing, and 'Conditionally Promotion' if 2 subject is failed.",
        img: "grading.gif",
      },
      {
        body: "For promotion, students must have a 'Promotion' remark. Otherwise, 'Retention' to retain grade level. Some students are transferred after promoting. Hence, the 'Promote and transfer' option.",
        img: "promotion.gif",
      },
      {
        body: "Enrolling students requires to input basic information, grade levels, and parent's information.",
        img: "enrollment.gif",
      },
      {
        body: "After promotion, students requires to enroll again. Filter and select grade level of students, and select section to enroll.",
        img: "enrollment_2.gif",
      },
      {
        body: "Returnee students are 'Promoted and transfered' at the 'promotion' tab. To enroll them again, input LRN and grade level to enroll.",
        img: "enrollment_3.gif",
      },
      {
        body: "Accounts are displayed in this tab and only 'superuser' or 'admin' account are permitted to change their usertype, and add advisory classes.",
        img: "accounts.gif",
      },
      {
        body: "To register an account, click the 'Add' button. Fill up the form, select advisory classes (if applied), usertype, and save.",
        img: "accounts_2.gif",
      },
      {
        body: "Operations tab consists of adding sections, grade levels, and grading periods. Click 'Add' button to add an item on corresponding tabs.",
        img: "operations.gif",
      },
    ],
    // otherImages: [
    //   {
    //     img: "group.jpg",
    //   },
    //   {
    //     img: "group_2.jpg",
    //   },
    //   {
    //     img: "group_3.jpg",
    //   },
    //   {
    //     img: "prototype_2.jpg",
    //   },
    // ],
    // finalImg: "group_4.jpg",
  },
  {
    name: "Restaurant Ordering System",
    subname: "Research final project",
    route: "research_project",
    type: "highlight",
    body: "With its user-friendly interface and efficient order management, the samgyupsal ordering system web app enhances customer satisfaction and helps restaurant owners optimize their operations for a smoother and more delightful dining experience.",
    createdAt: "2022-08-09",
    introText:
      "Most restaurants had inefficient customer service, as researchers found. Calling customers by name or number, though it may work in small places, could slow things down and get confusing. This might be okay for small eateries, but as businesses grow, manual monitoring could become a problem.",
    problem:
      "When helping clients in a busy and chaotic place, staff faced understandable challenges. Manual work took too long and got stressful as more customers came in, so it wasn't a viable solution. Customers got frustrated because it was hard to grab staff attention for help. If tables weren't cleared, customers waited longer, creating an ongoing delay.",
    solution:
      "To address the issue, researchers suggested a Restaurant Ordering System. This system would track occupied tables, bills, customer needs, and finished meals, reducing the need for physical monitoring. This allowed staff to focus on tasks and avoid distractions.",
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
    teams: [
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
    features: [
      {
        body: "To access the web system, user must fill up login form for validation and authentication.",
        img: "login.png",
      },
      {
        body: "The dashboard is the home page, provides an overview by presenting a concise summary of the current status of orders, crews, and table occupancy.",
        img: "dashboard.png",
      },
      {
        body: "Users are able to view occupation status on each tables as well as the timer count down. The user of this feature is the cashier and has the option to change the status of the table.",
        img: "tables.png",
      },
      {
        body: "Series of orders are shown when 'View' button is clicked.",
        img: "tables_4.png",
      },
      {
        body: "The table containing billed out tables presents a clear representation of these tables. The status column indicates whether each table's payment is 'paid' or 'pending.'",
        img: "tables_2.png",
      },
      {
        body: "The billing page exhibits a comprehensive list of all the food items that have been ordered for a particular table. The cashier is responsible for entering the customer's payment amount into the designated textbox. Moreover, for orders labeled as 'Set,' there exists the option to apply a discount to the final payment, allowing for flexible pricing adjustments.",
        img: "tables_3.png",
      },
      {
        body: "Within the menu page, the current status of orders for each individual table is prominently showcased. This status is categorized into three options: 'No order,' 'Pending,' and 'Completed.' This page serves as a valuable tool for waitstaff, enabling them to efficiently monitor and manage the progress of orders for various tables.",
        img: "menu.png",
      },
      {
        body: "Modal box will display after clicking the 'Show' button and displays various of functions. 'Menu' will open the ordering page, 'Attend' will notify other users that the table has been attended, 'Request bill' to mark the table as done eating.",
        img: "menu_2.png",
      },
      {
        body: "The dashboard page provides an overview by presenting a concise summary of the current status of orders, crews, and table occupancy.",
        img: "dirty.png",
      },
      {
        body: "On this page, customers are presented with a comprehensive array of all the available food items. Customers can make their selections by choosing the desired items and specifying the quantity for each. As items are added, the cart dynamically calculates the total price based on the selected quantities, offering transparency and convenience in tracking their order's cost.",
        img: "ordering.png",
      },
      {
        body: "The cook will see orders in this page. If prepared, user can simply click the 'Finish' button. However, some customers wish to cancel their order 'Cancel'.",
        img: "orders.png",
      },
      {
        body: "Manager of this system can insert food items to be selected in the ordering page. They can choose if items can be quantified or not. Quantites are updated each orders submitted.",
        img: "foods.png",
      },
      {
        body: "Accounts registered are displayed with each account's basic informations.",
        img: "accounts.png",
      },
      {
        body: "To register an account, users must fill up the form.",
        img: "accounts_2.png",
      },
      {
        body: "Each tasks or functions performed by a user is counted in this table for manager to evaluate the performance for the crew or the restaurant.",
        img: "accounts_3.png",
      },
      {
        body: "Log in history are displayed here.",
        img: "accounts_4.png",
      },
      {
        body: "As the restaurant business continues to experience growth, there is a corresponding increase in the need for additional equipment and tables. To accommodate this expansion, managers are granted the ability to effectively manage the tables through a dedicated section. Within this section, managers have the authority to both add new tables to the system and remove existing ones as necessary, ensuring the seamless adaptation of the restaurant's infrastructure to its evolving requirements.",
        img: "add_tables.png",
      },
      {
        body: "The device has an LED and a button. Th LED displays the current status of the table: 'Red' for occupied, 'Blue' for dirty, 'Green' for unoccupied, 'Yellow' for requesting assistance. When the button is clicked, the system will be notified by the table.",
        img: "prototype_4.jpg",
      },
    ],
    otherImages: [
      {
        img: "group.jpg",
      },
      {
        img: "group_2.jpg",
      },
      {
        img: "group_3.jpg",
      },
      {
        img: "prototype_2.jpg",
      },
    ],
    finalImg: "group_4.jpg",
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
    type: "sides",
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
    type: "sides",
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
    type: "sides",
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
    type: "challenge",
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
    type: "challenge",
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
    type: "sides",
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
    type: "sides",
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
    type: "sides",
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
    type: "sides",
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
    name: "IP Address Tracker",
    type: "challenge",
    body: "Show map geolocation by searching IP address using leaflet, and IP geolocation API.",
    createdAt: "2023-08-22",
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
        name: "Sass",
        bg: "#fda4af",
      },
    ],
    repoUrl: "https://github.com/justine-135/ip-address-tracker",
    liveUrl: "https://justine-135.github.io/ip-address-tracker/",
  },
  {
    name: "Multi-step Form",
    type: "challenge",
    body: "Show 4 steps form, and retain data on next, and previous page. Show summary at the end of the step.",
    createdAt: "2023-08-26",
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
    repoUrl: "https://github.com/justine-135/multi-step-form",
    liveUrl: "https://justine-135.github.io/multi-step-form/",
  },
  {
    name: "Landing Page Animation",
    type: "sides",
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
        text: "In our embedded systems subject, we built web-based motion capture system using a regular webcam and Python. With this new technology, users can capture and analyze motion data for all kinds of uses. It's a versatile and easy-to-use tool.",
      },
      // {
      //   text: "During our web development class, we developed a canteen ordering system to make it easy for students and staff to order meals. It's a user-friendly web app with a simple interface. People can browse the menu, pick what they want, and place orders smoothly. This system helps the canteen staff work better, manage orders accurately, and makes eating at school a breeze for everyone.",
      // },
    ],
  },
];

const data = { repos, technologies, experiences };

export default data;
