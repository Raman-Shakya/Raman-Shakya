import Landing from "./components/landing";
import NavBar from "./components/navbar";
import ProjectWrapper from "./components/projects/project-wrapper";
import TechStack from "./components/tech-stack";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Landing />
      <ProjectWrapper />
    </main>
  );
}
