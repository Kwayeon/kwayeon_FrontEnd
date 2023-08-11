import styled from "styled-components";

export const SidebarStyled = styled.div`
  min-width: 200px;
  width: 200px;
  height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid #eaeaea;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .logo {
    margin-bottom: 0rem;
    padding: 1rem 2rem 0 2rem;
    font-family: "Aquatico";
    font-size: 2rem;
    cursor: pointer;
  }

  .ant-menu-submenu {
    border-radius: 0;
    padding: 0;
  }
  .ant-menu-submenu-title {
    border-radius: 0;
    padding: 0;
    margin: 0;
    margin-inline: 0;
    margin-block: 0;
    width: 100%;
    color: #000;
  }

  .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    height: 50px;
  }

  .ant-menu-submenu-active {
    background-color: rgba(256, 256, 256, 0.07) !important;
    > .ant-menu-submenu-title span {
      // color: #8eb037;
    }
  }
  .ant-menu-submenu-selected > .ant-menu-submenu-title {
    color: #000;
  }

  ul {
    color: #000;

    .ant-menu-item {
      margin: 0;
      border-radius: 0;
      width: 100%;
      height: 3rem;
      background-color: #f8f8f8;
      padding-left: 40px !important;

      a {
        display: flex;
        align-items: center;
      }
    }

    .ant-menu-item-active {
      a:hover {
        color: #8eb037;
      }
      background-color: rgba(256, 256, 256, 0.07) !important;
    }

    .ant-menu-item-selected {
      color: #8eb037;
      border-radius: 0;
    }
  }

  .bottom {
    padding: 1rem;

    .signOutButton {
      padding: 0.6rem 1.5rem;
      height: auto;
      transition: 0.2s all;
      border-radius: 0.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      i {
        font-size: 1.7rem;
        margin-left: 0.5rem;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.15);
      }
    }
  }
`;
