import { Tool } from "@/types";
import React from "react";
import { Badge } from "./ui/badge";

type Props = {
  tools: Tool[];
};

/**
 * Component displaying a list of tools using Badge components.
 *
 * @component
 * @param {ToolsListProps} props - The properties of the component.
 * @returns {JSX.Element} - The rendered tools list component.
 */
export default function ToolsList({ tools }: Props) {
  return (
    <>
      {tools
        ? tools.map((tool) => (
            <Badge key={`${tool.id}-${tool.name}`}>{tool.name}</Badge>
          ))
        : "Pas d'outils utilisés"}
    </>
  );
}
