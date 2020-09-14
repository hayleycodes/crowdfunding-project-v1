import React from "react";
import { projectData } from "../data";

function HomePage() {
  return (
    <div>
      {projectData.map((data, key) => {
        return <div key={key}>{data.title}</div>;
      })}
    </div>
  );
}

export default HomePage;
