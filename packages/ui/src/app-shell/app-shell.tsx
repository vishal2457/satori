import React from "react";
import { Content, Wrapper } from "./app-shell.styles";

interface AppsShellProps {
  navbar?: React.ReactElement;
  header?: React.ReactElement;
  sidebar?: React.ReactElement;
  footer?: React.ReactElement;
  children: any
}

export const AppShell = ({ header, children }: AppsShellProps) => {
  return (
    <>
      {header}
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
};
