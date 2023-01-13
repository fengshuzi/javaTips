import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "漂泊者及其影子",
      description: "Talk is cheap, show me the code.",
    }
  },

  theme,

  shouldPrefetch: false,
});
