"use client";

import ProjectList from "@/components/project-list";
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities

import { Project } from "@/types";
import { PROJECTS } from "@/utils/projects";
import { useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS);

  return (
    <section className="my-4">
      <div className="text-center mt-8">
        <h2 className="text-sky-950 text-4xl font-bold text-center mb-4 uppercase">
          Projets
        </h2>
        <span className="font-semibold text-zinc-500 italic">
          Vous trouverez ici des projets personnels ou professionnels sur lequel
          j'ai pu travailler.
        </span>
      </div>
      <ProjectList projectsList={projects} />
    </section>
  );
}
