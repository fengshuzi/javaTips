import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "并发编程",
      icon: "note",
      prefix: "concurrent/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});