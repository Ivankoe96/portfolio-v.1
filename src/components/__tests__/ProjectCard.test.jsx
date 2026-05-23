import { render, screen } from "@testing-library/react";
import ProjectCard from "../ProjectCard";

const mockProject = {
  name: "Awesome Project",
  description: "A short description of the awesome project.",
  repo_url: "https://github.com/Ivankoe96/awesome-project",
  live_url: "https://awesome-project.vercel.app",
};

test("renders project name and description", () => {
  render(<ProjectCard project={mockProject} />);
   const title = screen.getByRole('heading', { name: /Awesome Project/i });
   expect(title).toBeInTheDocument();
   const description = screen.getByText('A short description of the awesome project.');
   expect(description).toBeInTheDocument();
});

test("shows GitHub and Live Demo links", () => {
  render(<ProjectCard project={mockProject} />);
  const githubLink = screen.getByRole("link", { name: /GitHub Repo/i });
  expect(githubLink).toHaveAttribute("href", mockProject.repo_url);

  const liveLink = screen.getByRole("link", { name: /Live Demo/i });
  expect(liveLink).toHaveAttribute("href", mockProject.live_url);
});
