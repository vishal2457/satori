import React from "react";
import { Card, Group, Text } from "ui";
import { TagPill } from "../../home.styles";

export const SingleUser = ({ user }: {user: any}) => {
  return (
    <Card css={{ cursor: "pointer" }}>
        <Group position="apart">
        <Text size="h4" >{user.firstname} {user.lastname}</Text>
          {user.admin ? <TagPill><Text size="h6">admin</Text></TagPill> : null}
        </Group>
      <Text size="h6"  >{user.mail}</Text>
    </Card>
  );
};
