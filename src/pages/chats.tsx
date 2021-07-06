import { Typography, Form, Input, Button } from "antd";
import { useState } from "react";
import { Page } from "../components";

type ChatsProps = {
  title: string;
};

export const WEBVIEW_TITLE = "ifood-chat";

const WEBVIEW_URL = "https://chat-webview.ifood.com.br";

export function mountAuthenticatedURl(token: string, merchantId: String) {
  return `${WEBVIEW_URL}/?token=${token}&merchantId=${merchantId}`;
}

type Auth = {
  token: string;
  merchantId: string;
};

type AuthFormProps = {
  onSubmit: (values: Auth) => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit }) => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onSubmit}
  >
    <Form.Item
      label="Token"
      name="token"
      rules={[
        { required: true, message: "Please input your authenticated token!" },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Merchant Id"
      name="merchantId"
      rules={[{ required: true, message: "Please input your Merchant UUID" }]}
    >
      <Input />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export const Chats: React.VFC<ChatsProps> = ({ title }) => {
  const [auth, setAuth] = useState<Auth | undefined>(undefined);

  function handleSubmit(formValues: Auth) {
    setAuth(formValues);
  }

  return (
    <Page title={title}>
      <Typography.Title>iFood Chats</Typography.Title>
      {auth ? (
        <iframe
          title={WEBVIEW_TITLE}
          data-testid={WEBVIEW_TITLE}
          src={mountAuthenticatedURl(auth.token, auth.merchantId)}
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      ) : (
        <AuthForm onSubmit={handleSubmit} />
      )}
    </Page>
  );
};
