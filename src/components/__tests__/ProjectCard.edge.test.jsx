import { render, screen } from "@testing-library/react";
import ProjectCard from "../ProjectCard";

const mockProject = {
  name: "Awesome Project",
  description: "A short description of the awesome project.",
  repo_url: "https://github.com/Ivankoe96/awesome-project",
  live_url: "Not available",
};

test("hides Live Demo link when live_url is not available", () => {
  render(<ProjectCard project={mockProject} />);
  // GitHub link should still be present
  expect(screen.getByRole("link", { name: /GitHub Repo/i })).toBeInTheDocument();
  // Live Demo link should NOT be rendered
  expect(screen.queryByRole("link", { name: /Live Demo/i })).not.toBeInTheDocument();
});
