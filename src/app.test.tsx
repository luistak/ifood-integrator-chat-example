import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { App } from "./app";
import { mountAuthenticatedURl, WEBVIEW_TITLE } from "./pages";

describe("Example chat integration app", () => {
  it("should render home page accordingly", async () => {
    render(<App />);

    const chatsLink = await screen.findByRole("link", { name: /home/i });
    expect(chatsLink).toBeInTheDocument();

    const chatsHomeHeading = await screen.findByRole("heading", {
      name: /home page/i,
    });
    expect(chatsHomeHeading).toBeInTheDocument();
  });
  it("should render chats page and webview accordingly", async () => {
    render(<App />);

    const chatsLink = await screen.findByRole("link", { name: /chats/i });
    expect(chatsLink).toBeInTheDocument();

    user.click(chatsLink);

    const chatsPageHeader = await screen.findByText(/ifood chats/i);
    expect(chatsPageHeader).toBeInTheDocument();

    const auth = {
      token: "some_wrong_token",
      merchantId: "someUuuid",
    };

    user.type(await screen.findByLabelText(/token/i), auth.token);

    user.type(await screen.findByLabelText(/merchant id/i), auth.merchantId);

    user.click(await screen.findByRole("button", { name: /submit/i }));

    const iframe = await screen.findByTestId(WEBVIEW_TITLE);
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("title", WEBVIEW_TITLE);

    const expectedAuthenticatedURL = mountAuthenticatedURl(
      auth.token,
      auth.merchantId
    );
    expect(iframe).toHaveAttribute("src", expectedAuthenticatedURL);
  });
});
