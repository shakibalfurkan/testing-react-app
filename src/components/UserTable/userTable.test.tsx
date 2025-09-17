import {
  findByTestId,
  logRoles,
  render,
  screen,
  within,
} from "@testing-library/react";
import UserTable from "./UserTable";
import { users } from "../../App";

describe("UserTable()", () => {
  it("should render the table correctly", async () => {
    const { container } = render(<UserTable users={users} />);
    logRoles(container);
    // const welcomeMessageEl = await screen.findByTestId(
    //   "welcome",
    //   {},
    //   { timeout: 2000 }
    // );
    // screen.logTestingPlaygroundURL();
    // expect(welcomeMessageEl).toBeInTheDocument();

    const rows = within(screen.getByTestId("users")).getAllByRole("row");
    expect(rows).toHaveLength(4);
  });
});
