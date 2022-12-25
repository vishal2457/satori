import Image from "next/image";
import React, { useState } from "react";
import { Card, Group, Text } from "ui";
import { TagPill } from "../../home.styles";
import { RenderCommits } from "./render-commits";

const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export const BuildLogCard = ({
  buildlog,
}: {
  buildlog: any;
}) => {
  const [activeCommit, setActiveCommit] = useState<boolean>(false);
  

  return (
    <>
      <Card
        hover={false}
        css={{
          mt: "$10",
          mb: "$2",
        }}
      >
        <Group>
          <Group>
            <Image
              src={buildlog.userAvatar}
              width={50}
              height={50}
              alt="avatar"
            />
            <div style={{ textAlign: "left" }}>
              <Text>
                Event:&nbsp; <TagPill type="push">{buildlog.event}</TagPill>
              </Text>
              <Text>Author:&nbsp;{buildlog.author}</Text>
              <Text>Message:&nbsp;{buildlog.title}</Text>
              <Text>
                {longEnUSFormatter.format(new Date(buildlog.createdAt))}
              </Text>
            </div>
          </Group>
          <div>
            <TagPill onClick={() => setActiveCommit((prev:boolean) => !prev)} >{buildlog.totalCommits}&nbsp;commits</TagPill>
          </div>
        </Group>
      </Card>
      {activeCommit ? <RenderCommits commits={buildlog.Commits} /> : null}
    </>
  );
};
