import AboutMe from "./components/about_me/about_me";
import Copyright from "./components/copyright";
import Landing from "./components/landing";
import NavBar from "./components/navbar";
import Particle from "./components/particles/particles";
import ProjectWrapper from "./components/projects/project-wrapper";
import TechStack from "./components/tech-stack";

export default function Home() {
  return (
    <main>
      <Particle />
      <NavBar />
      <Landing />
      {/* <AboutMe /> */}
      <ProjectWrapper />
      <Copyright />
    </main>
  );
}
