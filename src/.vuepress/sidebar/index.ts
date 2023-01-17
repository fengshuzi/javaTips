import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "00 并发编程",
      icon: "note",
      link: "concurrent/",
      prefix: "concurrent/",
      children: "structure",
    },
    {
      text: "01 jvm小手段",
      icon: "creative",
      prefix: "jvm/",
      link: "jvm/",
      children: "structure",
    },
    {
      text: "03 kafka",
      icon: "note",
      collapsible: true,
      prefix: "kafka/",
      children: "structure",
    },
    {
      text: "04 读书笔记",
      icon: "note",
      collapsible: true,
      prefix: "reading/",
      children: "structure",
    },
    {
      text: "05 随笔杂谈",
      icon: "note",
      collapsible: true,
      prefix: "diary/",
      children: "structure",
    },
    {
      text: "06 编程工具",
      icon: "note",
      collapsible: true,
      prefix: "tools/",
      children: "structure",
    }

    ,
    "about"
  ],
});