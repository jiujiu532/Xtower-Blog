import {LinkPreset, type NavBarConfig, type NavBarLink, NavBarSearchMethod, type NavBarSearchConfig} from "../types/config";
import {siteConfig} from "./siteConfig";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => {
  const links: (NavBarLink | LinkPreset)[] = [
    // 主页
    LinkPreset.Home,
    // 归档
    LinkPreset.Archive,
    // 我的
    {
      name: "我的",
      url: "/about/",
      icon: "fa6-solid:user",
    },
    // 链接
    {
      name: "链接",
      url: "/links/",
      icon: "material-symbols:link",
      children: [
        {
          name: "源项目 GitHub",
          url: "https://github.com/CuteLeaf/Firefly",
          external: true,
          icon: "fa6-brands:github",
        },
        {
          name: "GitHub",
          url: "https://github.com/jiujiu532",
          external: true,
          icon: "fa6-brands:github",
        },
        {
          name: "Bilibili",
          url: "https://space.bilibili.com/1131220360?spm_id_from=333.1387.0.0",
          external: true,
          icon: "fa6-brands:bilibili",
        },
      ],
    },
    // 留言
    LinkPreset.Guestbook,
    // 关于（下拉菜单）
    {
      name: "关于",
      url: "/about/",
      icon: "material-symbols:info",
      children: [
        {
          name: "项目",
          url: "/projects/",
          icon: "fa6-solid:folder-open",
        },
        {
          name: "时间线",
          url: "/timeline/",
          icon: "fa6-solid:timeline",
        },
        {
          name: "技能",
          url: "/skills/",
          icon: "fa6-solid:code",
        },
        {
          name: "番剧",
          url: "/bangumi/",
          icon: "fa6-solid:tv",
        },
        {
          name: "图片",
          url: "/gallery/",
          icon: "fa6-solid:images",
        },
      ],
    },
  ];
  
  return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
  // 可选：PageFind， MeiliSearch
  // 选择PageFind时：NavBarSearchMethod.PageFind,
  // 选择MeiliSearch时：NavBarSearchMethod.MeiliSearch,
  method: NavBarSearchMethod.PageFind,
  // 当选择 MeiliSearch 时的配置
  meiliSearchConfig: {
    INDEX_NAME: 'posts',
    CONTENT_DIR: 'src/content/posts',
    MEILI_HOST: "http://localhost:7700",
    PUBLIC_MEILI_HOST: "http://localhost:7700",
    PUBLIC_MEILI_SEARCH_KEY: "41134b15079da66ca545375edbea848a9b7173dff13be2028318fefa41ae8f2b",
  }
}

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
