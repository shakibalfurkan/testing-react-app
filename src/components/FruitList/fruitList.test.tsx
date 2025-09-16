import { render, screen } from "@testing-library/react";
import FruitList from "./FruitList";

const fruits = ["mango", "apple", "orange", "pineapple"];

describe("FruitList()", () => {
  it("Should render the list with list items", () => {
    render(<FruitList fruits={fruits} />);

    const list = screen.getByRole("list");
    const listitems = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listitems).toHaveLength(fruits.length);
  });
});
