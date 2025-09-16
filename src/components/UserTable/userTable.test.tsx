import { findByTestId, render, screen } from "@testing-library/react";
import UserTable from "./UserTable";
import { users } from "../../App";

describe("UserTable()", () => {
  it("should render the welcome message after 5ms", async () => {
    render(<UserTable users={users} />);
    const welcomeMessageEl = await screen.findByTestId(
      "welcome",
      {},
      { timeout: 2000 }
    );
    // screen.logTestingPlaygroundURL();
    expect(welcomeMessageEl).toBeInTheDocument();
  });
});
