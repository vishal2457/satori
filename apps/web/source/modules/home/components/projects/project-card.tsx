import Link from "next/link";
import React from "react";
import { Card, Text } from "ui";
import { singleProjectType } from "../../types";

export const ProjectCard = ({ project }: {project: singleProjectType}) => {
  
  return (
    <Link href={`/project/${project.id}`} passHref>
     <Card css={{ cursor: "pointer" }}>
      <Text size="h4" >{project.name}</Text>
      <Text size="h6"  >{project.identifier}</Text>
    </Card>
    </Link>
   
  );
};
