import NewsGridImg from "../media/newsGrid.png";
import reactAdminImg from "../media/reactAdmin.jpg";
import chatAppImg from "../media/chatAppImg.jpg";

export const projects = [
  {
    title: "React Admin Dashboard",
    description:
      "This project focuses on practicing the application of Material-UI and various libraries. The main objective is to gain proficiency in utilizing MUI and exploring the functionalities of different libraries.",
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
    title: "React Dashboard Application",
    description:
      "The Admin Panel consists of a Dashboard, Three Pages, Four Apps, and Seven charts that are fully functional. It includes a functional calendar, a kanban board, a WYSIWYG editor, and a color picker with the Tailwind CSS framework.",

    image: chatAppImg,
    tags: ["Tailwind", "React"],
    source: "https://github.com/JerryW2022/Dashboard",
    liveVersion: "https://dashboard2023v2.netlify.app/",
    id: 2,
  },
];
