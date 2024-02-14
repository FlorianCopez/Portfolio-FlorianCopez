"use client";

import ProjectList from "@/components/project-list";
import TitlePage from "@/components/title-page";
import { Project } from "@/types";
import { PROJECTS } from "@/utils/projects";
import { useState } from "react";

/**
 * Component for displaying a list of projects.
 * @returns {JSX.Element} JSX element representing the Projects page.
 */
export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS);

  return (
    // State to hold the list of projects
    <section>
      {/* Title and subtitle section */}
      <TitlePage
        title="Projets"
        subtitle="Vous trouverez ici des projets personnels ou professionnels sur lequel
          j'ai pu travailler."
      />
      {/* Render the ProjectList component with the list of projects */}
      <ProjectList projectsList={projects} />
    </section>
  );
}
