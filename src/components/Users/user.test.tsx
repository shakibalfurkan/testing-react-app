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

  //   const element2 = screen.getByPlaceholderText("User name");
  //   const element2 = screen.getByPlaceholderText("User name");
  //   const element2 = screen.getByText("Enter the form data");
  //   const element2 = screen.getByLabelText("Email", {
  //     selector: "input",
  //   });
  //   const element2 = screen.getByAltText("nature");
  //   const element2 = screen.getByTitle("open");
  //   const element2 = screen.getByDisplayValue("Shakib");
  const element2 = screen.getByTestId("paragraph");

  const button = screen.queryByRole("button", {
    name: "Submit",
  });

  expect(button).not.toBeInTheDocument();

  expect(element2).toBeInTheDocument();
  expect(element).toBeInTheDocument();
  expect(headingElement).toBeInTheDocument();
});
