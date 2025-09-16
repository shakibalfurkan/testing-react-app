import { render, screen } from "@testing-library/react";
import Users from "./User";

it("should render the component", () => {
  render(<Users />);
  const element = screen.getByRole("textbox", {
    name: "Name",
  });

  const headingElement = screen.getByRole("heading", {
    level: 2,
  });

  const element2 = screen.getByTestId("paragraph");

  expect(element2).toBeInTheDocument();
  expect(element).toBeInTheDocument();
  expect(headingElement).toBeInTheDocument();
});
