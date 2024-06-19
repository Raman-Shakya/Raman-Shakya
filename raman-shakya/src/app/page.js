import AboutMe from "./components/about_me/about_me";
import Copyright from "./components/copyright";
import Landing from "./components/landing";
import NavBar from "./components/navbar";
import ProjectWrapper from "./components/projects/project-wrapper";
import TechStack from "./components/tech-stack";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Landing />
      {/* <AboutMe /> */}
      <ProjectWrapper />
      <Copyright />
    </main>
  );
}
