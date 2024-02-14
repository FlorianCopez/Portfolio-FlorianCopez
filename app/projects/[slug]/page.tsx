"use client";

import ProjectItem from "@/components/project-item";
import { Project } from "@/types";
import { PROJECTS } from "@/utils/projects";
import React, { useEffect, useState } from "react";

/**
 * ProjectPage component that displays a specific project based on the provided slug.
 * @param {Object} props - React props containing parameters, specifically the project slug.
 * @returns {JSX.Element} JSX element representing the ProjectPage.
 */
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    // Find the project with the provided slug in the list of projects
    const findProjectWithSlug = PROJECTS.find(
      (project) => project.slug === params.slug
    );

    // If a project with the slug is found, set it in the state
    if (findProjectWithSlug) {
      setProject(findProjectWithSlug);
    }
  }, [params.slug]);

  return <section>{project && <ProjectItem project={project} />}</section>;
}
