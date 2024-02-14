import { Skill } from "@/types";
import React from "react";

type Props = {
  title: string;
  listSkill: Skill[];
};

/**
 * Component displaying a list of skills.
 *
 * @component
 * @param {SkillListProps} props - The properties of the component.
 * @returns {JSX.Element} - The rendered skill list component.
 */
export default function SkillList({ title, listSkill }: Props) {
  return (
    <div className="mb-12 md:my-0">
      <h2 className="text-sky-950 text-2xl font-bold text-center">{title}</h2>
      <div className="flex flex-wrap gap-3 mt-4">
        {listSkill.map((skill) => {
          return (
            <span
              key={skill.id}
              className="bg-sky-200 text-zinc-600 rounded-lg px-4 py-3 text-sm font-semibold"
            >
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
