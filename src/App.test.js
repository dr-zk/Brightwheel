import { render, screen } from "@testing-library/react";
import App from "./App";
import { useFetch } from "./hooks/useFetch";

test("title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Brightwheel/i);
  expect(linkElement).toBeInTheDocument();
});

test("loading in the beginning", () => {
  render(<App />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
