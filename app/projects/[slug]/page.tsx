"use client";

import ProjectItem from "@/components/project-item";
import { Project } from "@/types";
import { PROJECTS } from "@/utils/projects";
import React, { useEffect, useState } from "react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    const findProjectWithSlug = PROJECTS.find(
      (project) => project.slug === params.slug
    );

    if (findProjectWithSlug) {
      setProject(findProjectWithSlug);
    }
  }, [params.slug]);

  return <>{project && <ProjectItem project={project} />}</>;
}
