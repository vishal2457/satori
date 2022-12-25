import { GridContainer } from "../../home.styles";
import { singleProjectType } from "../../types";
import { ProjectCard } from "./project-card";

export const ProjectList = ({
  projects,
}: {
  projects: singleProjectType[];
}) => {
  return (
    <GridContainer>
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </GridContainer>
  );
};
