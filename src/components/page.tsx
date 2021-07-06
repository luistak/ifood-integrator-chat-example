import { Layout, Breadcrumb } from "antd";

type PageProps = {
  title: string;
};

export const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>{title}</Breadcrumb.Item>
      </Breadcrumb>
      <Layout.Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Layout.Content>
    </Layout>
  );
};
