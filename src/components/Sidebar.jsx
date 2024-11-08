import { Layout, Menu } from "antd";
import { Users2Icon } from "lucide-react";
const { Sider } = Layout;

export const Sidebar = ({ _this }) => {
  return (
    <Sider className="bg-white"  trigger={null} collapsible collapsed={_this.isSidebarOpen}>
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Users2Icon />
          <span>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Users2Icon />
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Users2Icon />
          <span>nav 3</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
