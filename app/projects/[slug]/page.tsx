"use client";

import ProjectItem from "@/components/project-item";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";
import { PROJECTS } from "@/utils/projects";
import Link from "next/link";
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

  return (
    <section>
      {project ? (
        <ProjectItem project={project} />
      ) : (
        <>
          <div className="flex flex-col items-center gap-8">
            <span className="font-semibold text-zinc-500 italic">
              Pas de projet trouvé !
            </span>
            <Link href="/projets">
              <Button variant="linkCustom">Retour Projets</Button>
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
