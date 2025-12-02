import type { FriendLink } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链配置
export const friendsConfig: FriendLink[] = [
  // 在这里添加你的友链
  // 示例：
  // {
  //   title: "友链名称",
  //   imgurl: "头像链接",
  //   desc: "描述",
  //   siteurl: "网站链接",
  //   tags: ["标签"],
  //   weight: 10,
  //   enabled: true,
  // },
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
  return friendsConfig
    .filter((friend) => friend.enabled)
    .sort((a, b) => b.weight - a.weight); // 按权重降序排序
};
