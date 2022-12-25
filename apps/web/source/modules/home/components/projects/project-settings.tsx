import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button, Card, Group, Input, Spacer, Text } from "ui";
import axiosInstance from "../../../../libs/axios-instance";

export const ProjectSettings = ({ id, details }: { id: string, details: any }) => {
  const [payload, setPayload] = useState({
    liveLink: "",
    serverURL: "",
  });

  useEffect(() => {
    
    setPayload({
      serverURL: details.serverURL,
      liveLink: details.link
    })
  
    return () => {
      
    }
  }, [])
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const updateProject = () => {
    const toastId = toast.loading("Loading...");

    axiosInstance
      .post(`/projects/update-project`, {
        link: payload.liveLink,
        serverURL: payload.serverURL,
        project: id,
      })
      .then(({ data }) => {
        toast.success(data.msg, {
          id: toastId,
        });
      })
      .catch((err) => {
        toast.error("Something went wrong", {
          id: toastId,
        });
      });
  };

  return (
    <>
      <Section header="General">
        <Input
          onChange={handleChange}
          value={payload.liveLink}
          name="liveLink"
          css={{ width: "350px" }}
          label="Live url"
        />
      </Section>
      <Spacer t={30} />
      <Section header="CI / CD">
        
        <Text mute>
          Note: Copy and paste the below url in your gitlab project webhooks.
        </Text>
        <Text mute>
        project -&gt; settings -&gt; webhooks -&gt; URL
        </Text>
    <Spacer y={5}/>
        <Text>
          http://prosesindia.in:5000/gl/{id}
        </Text>
    <Spacer y={10}/>
        <Input
          onChange={handleChange}
          value={payload.serverURL}
          name="serverURL"
          css={{ width: "350px" }}
          label="Server url"
        />
        <Text mute size="h6">
          The server url which has satori endpoint configured.
        </Text>{" "}
      </Section>
      <Spacer t={10} />
      <Group position="right">
        <Button onClick={updateProject}>Update</Button>
      </Group>
    </>
  );
};

function Section({
  header,
  children,
}: {
  header: string;
  children: React.ReactNode;
}) {
  return (
    <Card hover={false}>
      <Text>{header}</Text>
      <Spacer t={20} />
      {children}
    </Card>
  );
}
