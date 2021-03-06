import { Layout, Menu } from "antd";
import {
  ShopOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

export function Aside() {
  return (
    <Layout.Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="item1" icon={<ShopOutlined />}>
          Seu Zé Bakery
        </Menu.Item>
        <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Orders">
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub2" icon={<LaptopOutlined />} title="Catalog">
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub3" icon={<NotificationOutlined />} title="Emails">
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>
  );
}
