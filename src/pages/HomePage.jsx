import React from "react";
import { projectData } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
  return (
    <div id="project-list">
      {projectData.map((data, key) => {
        return <ProjectCard key={key} projectData={data} />;
      })}
    </div>
  );
}

export default HomePage;
