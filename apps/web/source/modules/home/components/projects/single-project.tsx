import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container, Group, Text } from "ui";
import { swrFetcher } from "../../../../libs/axios-instance";
import useSWR from "swr/immutable";
import { Pills } from "../../home.styles";
import { ProjectDetail } from "./project-detail";
import { ProjectSettings } from "./project-settings";

const pills = ["project", "settings"];
type activeType = "project" | "settings";

export const SingleProject = () => {
  const router = useRouter();
  const { data: project, isLoading } = useSWR(
    router.query.identifier ? `projects/${router.query.identifier}/byid` : null,
    swrFetcher.get
  );
  const [active, setActive] = useState<activeType>("project");

  const changeActive = (x: activeType) => setActive(x);

  const renderActive = () => {
    if (active == "project" && project) {
      return (
        <ProjectDetail
          project={project?.data?.project}
          buildLogs={project?.data?.satori?.BuildLogs}
        />
      );
    }
    if (active == "settings" && project) {
      return <ProjectSettings details={project?.data?.satori} id={project?.data?.project.identifier} />;
    }
    return <></>;
  };

  return (
    <Container>
      <Group css={{ marginBottom: "15px" }} position="apart">
        <Group>
          {pills.map((x:any) => {
            return (
              <Pills
                key={x}
                active={x == active}
                onClick={() => changeActive(x)}
              >
                <Text>{x}</Text>
              </Pills>
            );
          })}
        </Group>
      </Group>
      {renderActive()}
    </Container>
  );
};
