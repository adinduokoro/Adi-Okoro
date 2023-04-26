import Work1 from "../../assets/wdftraining.png";
import Work2 from "../../assets/adiportfolio.png";

export const projectsData = [
  //freelance or project 1024x710
  {
    id: 1,
    image: Work1,
    title: "Firearm's Training Site",
    category: "freelance",
    demoPath: "https://www.wdftraining.com",
    codePath: "https://github.com/adinduokoro/Training-Site",
  },
  {
    id: 2,
    image: Work2,
    title: "Portfolio Site",
    category: "project",
    demoPath: "",
    codePath: "https://github.com/adinduokoro/Adi-Okoro",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "freelance",
  },
  {
    name: "project",
  },
];

export default { projectsData , projectsNav }
