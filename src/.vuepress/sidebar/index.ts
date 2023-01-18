import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "并发编程",
      icon: "note",
      link: "concurrent/",
      prefix: "concurrent/",
      children: "structure",
    },
    {
      text: "jvm小手段",
      icon: "creative",
      prefix: "jvm/",
      link: "jvm/",
      children: "structure",
    },
    {
      text: "java",
      icon: "creative",
      prefix: "java/",
      link: "java/",
      children: "structure",
    },
    {
      text: "kafka",
      icon: "note",
      collapsible: true,
      prefix: "kafka/",
      children: "structure",
    },
    {
      text: "读书笔记",
      icon: "note",
      collapsible: true,
      prefix: "reading/",
      children: "structure",
    },
    {
      text: "随笔杂谈",
      icon: "note",
      collapsible: true,
      prefix: "diary/",
      children: "structure",
    },
    {
      text: "编程工具",
      icon: "note",
      collapsible: true,
      prefix: "tools/",
      children: "structure",
    },
    {
      text: "运动健身减肥日记",
      icon: "note",
      collapsible: true,
      prefix: "sport/",
      children: "structure",
    },
    {
      text: "观影记录",
      icon: "note",
      collapsible: true,
      prefix: "movie/",
      children: "structure",
    }

    ,
    "about"
  ],
});