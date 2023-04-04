import { render, screen } from "@testing-library/react";
import { TextInput } from "./index";

describe("<TextInput />", () => {
  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={"testando"} />);
    const input = screen.getByPlaceholderText(/type your search/i)
    expect(input).toBeInTheDocument()
    expect(input.value).toBe('testando')
  });
  it("should call handleChange function on each key pressed", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={"testando"} />);
  });
});
