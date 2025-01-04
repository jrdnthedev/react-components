import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Search } from "./search"; // Adjust the import path as necessary
// import { debounce } from "lodash";

// jest.mock("lodash", () => ({
//   debounce: jest.fn((fn, delay) => {
//     let timeout: NodeJS.Timeout;
//     return (...args: any[]) => {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => fn(...args), delay);
//     };
//   }),
// }));

describe("Search Component", () => {
  test("renders the input field", () => {
    render(<Search onSearch={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();
  });

  test("updates the input value on change", () => {
    render(<Search onSearch={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText("Search...");

    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(inputElement).toHaveValue("test");
  });

  test("calls onSearch with a debounced delay", async () => {
    jest.useFakeTimers(); // Use fake timers for precise control

    const mockOnSearch = jest.fn();
    render(<Search onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText("Search...");
    fireEvent.change(inputElement, { target: { value: "hello" } });

    // Ensure onSearch isn't called immediately
    expect(mockOnSearch).not.toHaveBeenCalled();

    // Fast-forward debounce timer
    jest.advanceTimersByTime(500);

    // Ensure onSearch is called after debounce delay
    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledWith("hello");
    });

    jest.useRealTimers();
  });

  test("resets debounce timer on consecutive input changes", async () => {
    jest.useFakeTimers();

    const mockOnSearch = jest.fn();
    render(<Search onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText("Search...");

    // Type first character
    fireEvent.change(inputElement, { target: { value: "h" } });
    jest.advanceTimersByTime(300);

    // Type second character before debounce delay
    fireEvent.change(inputElement, { target: { value: "he" } });
    jest.advanceTimersByTime(300);

    // Type third character before debounce delay
    fireEvent.change(inputElement, { target: { value: "hel" } });

    // Fast-forward to 500ms (after the last keystroke)
    jest.advanceTimersByTime(500);

    // Ensure onSearch is called only once with the final value
    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledTimes(1);
      expect(mockOnSearch).toHaveBeenCalledWith("hel");
    });

    jest.useRealTimers();
  });
});
