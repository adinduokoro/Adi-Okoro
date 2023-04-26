import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";

export const projectsData = [
  //freelance or project
  {
    id: 1,
    image: Work1,
    title: "Example 1",
    category: "freelance",
    demoPath: "https://www.google.com",
    codePath: "https://icon-sets.iconify.design/tabler/source-code/",
  },
  {
    id: 2,
    image: Work2,
    title: "Example 2",
    category: "project",
    demoPath: "",
    codePath: "",
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
