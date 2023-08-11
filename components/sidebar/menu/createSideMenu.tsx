import { MenuProps } from "antd";
import Link from "next/link";

export const createSidebarMenus = (menus: MenuProps["items"]): MenuProps["items"] => {
  if (!menus) return menus;

  return menus.map((menu) => {
    if (!menu || !("label" in menu)) return menu;

    if ("children" in menu) {
      return {
        ...menu,
        children: createSidebarMenus(menu.children),
      };
    }

    return {
      ...menu,
      label: <Link href={menu.key as string}>{menu.label}</Link>,
    };
  });
};

export const sidebarMenus = createSidebarMenus([
  {
    key: "/",
    label: "수업홈",
    children: [],
  },
  {
    key: "notice",
    label: "공지",
    children: [],
  },
  {
    key: "assignment",
    label: "과제",
    children: [
      {
        key: "/assignment/create",
        label: "과제 만들기",
      },
      {
        key: "/assignment/coding",
        label: "코딩 과제",
      },
    ],
  },
  {
    key: "lecture",
    label: "강의 콘텐츠",
    children: [],
  },
  {
    key: "lecturedata",
    label: "강의 자료실",
    children: [],
  },
  {
    key: "attendance",
    label: "출결 / 학습현황",
    children: [],
  },
  {
    key: "grade",
    label: "성적",
    children: [],
  },
]);
