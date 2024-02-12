import { Tool } from "@/types";
import React from "react";
import { Badge } from "./ui/badge";

type Props = {
  tools: Tool[];
};

export default function ToolsList({ tools }: Props) {
  return (
    <>
      {tools
        ? tools.map((tool) => <Badge key={tool.id}>{tool.name}</Badge>)
        : "Pas d'outils utilisés"}
    </>
  );
}
