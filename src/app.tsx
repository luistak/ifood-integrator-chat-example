import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Aside } from "./components";
import { Chats, Home } from "./pages";

enum Routes {
  Home = "home",
  Chats = "chats",
}

const ROUTE_PATHS = {
  [Routes.Home]: "/",
  [Routes.Chats]: "/chats",
};

export function App() {
  return (
    <Layout>
      <Router>
        <Layout.Header className="header">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {Object.entries(ROUTE_PATHS).map(([route, path]) => (
              <Menu.Item key={route}>
                <Link to={path}>{route}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Layout.Header>
        <Layout>
          <Aside />
          <Switch>
            <Route path={ROUTE_PATHS[Routes.Chats]}>
              <Chats title={Routes.Chats} />
            </Route>
            <Route path={ROUTE_PATHS[Routes.Home]}>
              <Home title={Routes.Home} />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Layout>
  );
}
