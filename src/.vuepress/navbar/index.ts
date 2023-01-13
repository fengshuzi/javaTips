import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "文档模式", icon: "discover", link: "/concurrent/" },
  {
    text: "博客指南",
    icon: "note",
    link: "https://theme-hope.vuejs.press/zh/guide/",
  },
]);
