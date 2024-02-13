"use client";
/* eslint-disable react/no-unescaped-entities */

import ProjectList from "@/components/project-list";
import TitlePage from "@/components/title-page";
import { Project } from "@/types";
import { PROJECTS } from "@/utils/projects";
import { useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS);

  return (
    <section>
      <TitlePage
        title="Projets"
        subtitle="Vous trouverez ici des projets personnels ou professionnels sur lequel
          j'ai pu travailler."
      />
      <ProjectList projectsList={projects} />
    </section>
  );
}
