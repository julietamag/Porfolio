import imageTmdb from "../../public/assets/Projects/tmdb.png";
import imageKlimty from "../../public/assets/Projects/klimty.png";
import imageGlobant from "../../public/assets/Projects/globant.png";

export const projectData: ProjectData[] = [
  {
    image: imageGlobant,
    title: "Broken Office | Globant ",
    description:
      "Designed and developed a mobile-first application for reporting issues and damaged elements in the offices or homes of workers to a service worker to handle it. Done in a professional context in a team of 6 using Agile methodologies with sprints of one week. I implemented features such as image recognition using a model I trained, geolocation and the UI/UX of the website.",
    techStack: [
      "JavaScript",
      "React",
      "Redux",
      "Node.js",
      "MaterialUI",
      "Mongoose",
      "AtlasDB",
      "Express",
      "ml5.js",
      "Socket.io",
      "JWT",
      "Google Cloud",
    ],
    gitHub: "https://linkmix.co/16606758",
    demo: "",
  },
  {
    image: imageKlimty,
    title: "Klimty | E-commerce",
    description:
      "Built a desktop application for users to buy prints, done  in 2 weeks in a team of 6. I developed the cart, checkout, product review, purchase history, profile customization, and grids of relevant data with filters.",
    techStack: [
      "JavaScript",
      "React",
      "Redux",
      "Node.js",
      "MaterialUI",
      "Sequelize",
      "Express",
      "Firebase",
    ],
    gitHub: "https://linkmix.co/16606888",
    demo: "https://front-klimty.vercel.app/",
  },
  {
    image: imageTmdb,
    title: "TMDB | The Movie Data Base",
    description:
      "Single-handedly managed the development and deployment of a responsive application for visualizing  movies and tv shows in a week. incorporating key features such as registration and login, profile personalization, search bar and a favorites list. ",
    techStack: [
      "JavaScript",
      "React",
      "Redux",
      "Node.js",
      "Bootstrap",
      "Sequelize",
      "Express",
      "JWT",
    ],
    gitHub: "https://linkmix.co/16606934",
    demo: "https://tmbd-p5-front.vercel.app/",
  },
];
