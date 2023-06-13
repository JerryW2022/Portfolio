import NewsGridImg from "../media/newsGrid.png";
import reactAdminImg from "../media/reactAdmin.jpg";
import reactAdmin2Img from "../media/ReactAdminDashboard2.jpg";

export const projects = [
  {
    title: "React Admin Dashboard",
    description:
      "This project  focuses on practicing the application of Material-UI and various libraries. The main objective is to gain proficiency in utilizing MUI and exploring the functionalities of different libraries.",
    image: reactAdminImg,
    tags: ["React", "Material UI", "Formik"],
    source: "https://github.com/JerryW2022/React-Admin-Dashboard",
    liveVersion: "https://react-admin-management2023.netlify.app",
    id: 0,
  },
  {
    title: "NewsGrid Website",
    description:
      "This project involves creating a basic website for a fictional news portal, with a particular emphasis on utilizing the CSS Grid Layout using modern HTML and CSS techniques.",
    image: NewsGridImg,
    tags: ["HTML", "CSS", "Grid"],
    source: "https://github.com/JerryW2022/newsgrid",
    liveVersion: "https://news-grid2022.netlify.app",
    id: 1,
  },
  {
    title: "React Admin Dashboard2",
    description:
      "This project involves backend management with state management, connecting to APIs, sending requests to fetch and display data, as well as facilitating communication between different components.",
    image: reactAdmin2Img,
    tags: ["axios", "React", "Redux"],
    source: "https://github.com/JerryW2022/cms_client",
    liveVersion: "",
    id: 2,
  },
];
