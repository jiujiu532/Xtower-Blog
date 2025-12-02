import type { SiteConfig } from "@/types/config";
import { fontConfig } from "./fontConfig";

// 定义站点语言
// 语言代码示例：'zh_CN', 'zh_TW', 'en', 'ja', 'ru'
const SITE_LANG = "zh_CN";

export const siteConfig: SiteConfig = {
  title: "Evernight",
  subtitle: "Demiurge",
  site_url: "https://blog.xtower.site",
  description: "Evernight 个人博客站点，使用 Astro 构建。",
  keywords: ["弦塔", "Evernight", "Astro", "ACGN", "博客", "静态博客"],

  lang: SITE_LANG,

  themeColor: {
    hue: 360, // 主题色默认色相，0-360
    fixed: false, // 是否隐藏主题色选择器
    defaultMode: "system", // 默认模式：light/dark/system
  },

  favicon: [
    {
      src: "/assets/images/favicon.ico",
      theme: "light",
      sizes: "32x32",
    },
  ],

  // 导航栏Logo（icon/image）
  navbarLogo: {
    type: "image",
    value: "/assets/images/icon.png",
    alt: "🍀",
  },
  // 导航栏标题，不设则回落到 title
  navbarTitle: "Evernight",

  // 站点开始日期，用于统计运行天数
  siteStartDate: "2025-11-21",

  // 追番配置
  bangumi: {
    userId: "1163581",
  },

  // 文章页底部的“上次编辑时间”卡片开关
  showLastModified: true,

  // OpenGraph 图片生成（本地调试建议关闭）
  generateOgImages: false,

  // 页面开关：false 时会返回 404
  pages: {
    sponsor: true,
    guestbook: true,
    bangumi: true,
  },

  // 文章列表布局
  postListLayout: {
    defaultMode: "list", // list 单列；grid 双列（双侧边栏时不可用）
    allowSwitch: true,
  },

  // 分页配置
  pagination: {
    postsPerPage: 8,
  },

  backgroundWallpaper: {
    mode: "banner", // banner / overlay / none
    switchable: true, // 是否允许导航栏切换壁纸模式
    src: {
      desktop: "/assets/images/desktop-bg.png",
      mobile: "/assets/images/m1.webp",
    },
    banner: {
      position: "10% 20%",
      homeText: {
        enable: true,
        title: "Evernight",
        subtitle: ["「再见，然后永别劣等感」"],
        typewriter: {
          enable: true,
          speed: 100,
          deleteSpeed: 50,
          pauseTime: 2000,
        },
      },
      credit: {
        enable: {
          desktop: true,
          mobile: true,
        },
        text: {
          desktop: "长夜月门",
          mobile: "长夜月门",
        },
        url: {
          desktop: "https://x.com/ment502/status/1970738334784987565",
          mobile: "https://www.pixiv.net/artworks/135820216",
        },
      },
      navbar: {
        transparentMode: "semifull",
      },
      // 波浪动画效果配置，开启可能会影响性能
      waves: {
        enable: {
          desktop: true,
          mobile: true,
        },
        performance: {
          quality: "high",
          hardwareAcceleration: true,
        },
      },
    },
    overlay: {
      zIndex: -1,
      opacity: 0.8,
      blur: 1,
    },
  },

  // 字体配置
  font: fontConfig,
};
