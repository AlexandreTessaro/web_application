import { list, check, todo, home } from "./Icons";

const menu = [
  {
    id: 1,
    title: "Todas as Tarefas",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Importante",
    icon: list,
    link: "/important",
  },
  {
    id: 3,
    title: "Completo",
    icon: check,
    link: "/completed",
  },
  {
    id: 4,
    title: "Para fazer",
    icon: todo,
    link: "/incomplete",
  },
];

export default menu;
