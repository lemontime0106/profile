import Navigation from "./components/Navigation";

import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <div className="fixed w-full">
        <Navigation />
      </div>
      <div className="pt-[8vh]">
        <AboutMe />
        <Skills />
        <Project />
      </div>
    </div>
  );
}

export default App;
