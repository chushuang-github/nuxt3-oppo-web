// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 重置样式、全局样式
  css: [
    "normalize.css",
    "@/assets/css/global.scss",
    "~/assets/css/iconfont.css",
  ],
  // 自动导入scss变量
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/css/variables.scss" as *;`,
        },
      },
    },
  },
  app: {
    // 可以给所有页面的head添加一下SEO信息
    head: {
      title: "弘源OPPO手机商城",
      meta: [
        {
          name: "description",
          content:
            "OPPO专区，官方正品，最新最全的OPPO手机产品以及配件在线抢购！",
        },
        {
          name: "keywords",
          content: "OPPO商城，OPPO专区, OPPO手机，OPPO配件，OPPO, OPPO官网商城",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      noscript: [{ children: "Javascript is required" }],
    },
  },
  // 配置nuxt3的扩展模块
  modules: ["@pinia/nuxt", "@element-plus/nuxt"],
});
