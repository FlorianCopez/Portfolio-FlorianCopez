import { Project } from "@/types";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {
  projectsList: Project[];
};

export default function ProjectList({ projectsList }: Props) {
  return (
    <div className="mt-20">
      {projectsList.map((project, index) => (
        <div
          key={project.id}
          className={`py-8 md:flex md:px-8 md:gap-8 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="imageCustom relative w-full h-52 md:w-4/12 md:mt-4">
            <Image
              src={project.image}
              alt={`image du projet ${project.title}`}
              fill
              className="rounded-lg"
            />
          </div>
          <div className="w-full py-8 md:w-7/12">
            <h4 className="text-center text-xl font-bold text-sky-950">
              {project.title}
            </h4>
            <p className="py-2 text-zinc-500">{project.synopsis}</p>
            <div className="text-center my-4">
              <Link href={`/projets/${project.slug}`}>
                <Button variant="linkCustom">En savoir plus</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
