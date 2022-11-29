import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders hello world as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //... nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders its good to see as text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //... nothing

    //Assert
    const unchangedTextElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(unchangedTextElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const changedTextElement = screen.getByText("Changed!");
    expect(changedTextElement).toBeInTheDocument();
  });
});
