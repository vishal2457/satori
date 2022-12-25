import React from "react";
import { Card, Group, Spacer, Text } from "ui";
import { TagPill } from "../../home.styles";


const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});


export const RenderCommits = ({ commits }: { commits: any }) => {
  console.log(commits);

  return (
    <Card hover={false}>
      <Text size="h3">Commits</Text>
      {commits.map((x: any, index: number) => {
        return (<>
        <Spacer y={15} />
           <Group key={x.id} position="apart">
            <div  style={{ textAlign: "left" }}>
              <Text>{x.title}</Text>
              <Text mute>{x.message}</Text>
              <a href={x.link} target="_blank" rel="noreferrer">
                go to commit
              </a>
            </div>
            <div style={{textAlign: 'right'}}>
              <Text>{x.author}</Text>
              <Text>{longEnUSFormatter.format(new Date(x.timestamp))}</Text>
              <Group position="right">
                <TagPill>A: {x.added}</TagPill>
                <TagPill>M: {x.modified}</TagPill>
                <TagPill>R: {x.removed}</TagPill>
              </Group>
            </div>
          </Group>
        </>
        );
      })}
    </Card>
  );
};
