import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "00 并发编程",
      icon: "note",
      link: "concurrent/"
      prefix: "concurrent/",
      children: "structure",
    },
    {
      text: "01 jvm小手段",
      icon: "creative",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});