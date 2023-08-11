import React, { memo, ReactNode } from "react";
import { useRouter } from "next/router";

import { Layout, Menu } from "antd";

import { sidebarMenus } from "./menu/createSideMenu";

import { SidebarStyled } from "./styled";

export interface SidebarProps {
  children?: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const router = useRouter();

  return (
    <SidebarStyled>
      <Layout>
        <Layout.Sider width={200}>
          <Menu
            mode="inline"
            items={sidebarMenus}
            selectedKeys={[router.pathname]}
            defaultOpenKeys={router.pathname.split("/").slice(1, -1)}
            style={{ height: "100%", borderRight: 0 }}
          />
        </Layout.Sider>

        <Layout style={{ marginLeft: 200 }}>
          <Layout.Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div style={{ padding: "20px" }}>{children}</div>
          </Layout.Content>
        </Layout>
      </Layout>
    </SidebarStyled>
  );
};

export default memo(Sidebar);
