import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import { createStore } from "../../redux/store";

describe("Counter()", () => {
  test("Counter value will increase by 1 upon clicking on the increment button", async () => {
    user.setup();
    render(
      <Provider store={createStore()}>
        <Counter />
      </Provider>
    );

    const counterValueElement = screen.getByText("0");
    const incrementButton = screen.getByText("Increment");

    await user.click(incrementButton);

    expect(counterValueElement).toHaveTextContent("1");
  });
  test("Counter value will increase by 1 upon clicking on the increment button", async () => {
    user.setup();
    render(
      <Provider store={createStore()}>
        <Counter />
      </Provider>
    );

    const counterValueElement = screen.getByText("0");
    const incrementButton = screen.getByText("Increment");

    await user.click(incrementButton);

    expect(counterValueElement).toHaveTextContent("1");
  });
});
