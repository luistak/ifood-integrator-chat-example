import { Typography } from "antd";

import { Page } from "../components";

type HomeProps = {
  title: string;
};

export const Home: React.VFC<HomeProps> = ({ title }) => {
  return (
    <Page title={title}>
      <Typography.Title>Home page</Typography.Title>
      <Typography.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vitae lorem maximus, lacinia lorem vitae, feugiat mauris. Phasellus sed
        velit non nibh posuere faucibus. Pellentesque tempor eget orci nec
        varius. Aenean maximus nisi eget dictum mollis. Nunc pharetra dignissim
        elit sed elementum. Nam condimentum arcu in luctus accumsan. Aenean
        vulputate dignissim tortor, eu pretium eros vestibulum ut. Aliquam eget
        quam et nisl pretium pretium ac nec ex. Quisque posuere interdum tempus.
        Maecenas vel consectetur lorem. Mauris id tincidunt neque. Pellentesque
        egestas leo sit amet augue porttitor finibus. Ut lacinia ante eu felis
        placerat, sed fringilla massa vehicula. Etiam pretium turpis vitae nibh
        malesuada hendrerit.
      </Typography.Text>
    </Page>
  );
};
