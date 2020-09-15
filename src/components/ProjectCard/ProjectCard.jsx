import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  const { projectData } = props;
  return (
    <div className="project-card">
      <img src={projectData.image} />
      <h3>{projectData.title}</h3>
    </div>
  );
}

export default ProjectCard;
