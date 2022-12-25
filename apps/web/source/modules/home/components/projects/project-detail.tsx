import React from "react";
import { Spacer, Text } from "ui";
import { singleProjectType } from "../../types";
import { BuildLogCard } from "./buildlog-card";

export const ProjectDetail = ({ project, buildLogs }: { project: singleProjectType, buildLogs: any[] }) => {
  if (!project) {
    return <p>loading...</p>;
  }
  
  return (
    <div>
      <Text size="h2">{project.name}</Text>
      <Text size="h4">{project.identifier}</Text>
      <Spacer y={30} />
      {buildLogs && buildLogs.map((x:any, index: number) => {
        return <BuildLogCard buildlog={x}  key={x.id} />
      })}
    </div>
  );
};
