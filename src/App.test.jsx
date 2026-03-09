import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App"; // Assuming App.jsx is in the same directory or src/
import { describe, it, expect, vi } from "vitest";

// Mock framer-motion to bypass animation delays and AnimatePresence wait mode
vi.mock("framer-motion", () => {
  const omitProps = (props) => {
    // eslint-disable-next-line no-unused-vars
    const { initial, animate, exit, transition, whileHover, ...validProps } = props;
    return validProps;
  };
  return {
    motion: {
      div: (props) => <div {...omitProps(props)} />,
      section: (props) => <section {...omitProps(props)} />,
    },
    AnimatePresence: ({ children }) => <>{children}</>,
  };
});

// Mock child components to simplify App.jsx testing and focus on navigation logic
vi.mock("./components/Projects", () => ({
  default: () => (
    <div data-testid="projects-component">Projects Component Mock</div>
  ),
}));

vi.mock("./components/Certifications", () => ({
  default: () => (
    <div data-testid="certifications-component">
      Certifications Component Mock
    </div>
  ),
}));

describe("App Navigation", () => {
  it("renders About Me view by default", () => {
    render(<App />);
    // Check for a unique element from the "About Me" section
    expect(screen.getByText(/Hi, I'm Ivan Koe/i)).toBeInTheDocument();
    // Check that mocked components are not visible
    expect(screen.queryByTestId("projects-component")).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("certifications-component")
    ).not.toBeInTheDocument();
  });

  it("switches to Projects view when Projects button is clicked", async () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Projects/i }));
    expect(await screen.findByTestId("projects-component")).toBeInTheDocument();
    // Check that "About Me" and "Certifications" are not visible
    expect(screen.queryByText(/Hi, I'm Ivan Koe/i)).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("certifications-component")
    ).not.toBeInTheDocument();
  });

  it("switches to Certifications view when Certifications button is clicked", async () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Certifications/i }));
    expect(await screen.findByTestId("certifications-component")).toBeInTheDocument();
    // Check that "About Me" and "Projects" are not visible
    expect(screen.queryByText(/Hi, I'm Ivan Koe/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId("projects-component")).not.toBeInTheDocument();
  });

  it("switches back to About Me view from Projects view", async () => {
    render(<App />);
    // Go to Projects
    fireEvent.click(screen.getByRole("button", { name: /Projects/i }));
    expect(await screen.findByTestId("projects-component")).toBeInTheDocument();

    // Go back to About Me
    fireEvent.click(screen.getByRole("button", { name: /About Me/i }));
    expect(await screen.findByText(/Hi, I'm Ivan Koe/i)).toBeInTheDocument();
    expect(screen.queryByTestId("projects-component")).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("certifications-component")
    ).not.toBeInTheDocument();
  });

  it("switches back to About Me view from Certifications view", async () => {
    render(<App />);
    // Go to Certifications
    fireEvent.click(screen.getByRole("button", { name: /Certifications/i }));
    expect(await screen.findByTestId("certifications-component")).toBeInTheDocument();

    // Go back to About Me
    fireEvent.click(screen.getByRole("button", { name: /About Me/i }));
    expect(await screen.findByText(/Hi, I'm Ivan Koe/i)).toBeInTheDocument();
    expect(screen.queryByTestId("projects-component")).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("certifications-component")
    ).not.toBeInTheDocument();
  });
});
