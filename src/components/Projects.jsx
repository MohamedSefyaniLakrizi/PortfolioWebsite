import React from "react";
import "./Projects.css";
import "../assets/Tailwind.jsx";
import Project from "./Project";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full flex flex-col justify-center items-center my-32 md:my-0"
    >
      <h1 className="text-4xl font-bold text-white">Projects</h1>
      <div className="flex flex-col items-center mt-10 gap-10">
        <Project project="shopify_theme" />
        <Project project="airbnb_clone" />
      </div>
    </section>
  );
}

export default Projects;
