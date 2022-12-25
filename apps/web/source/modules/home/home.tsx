import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Container, Group, Text } from "ui";
import { ProjectList } from "./components/projects/project-list";
import { UserList } from "./components/users/user-list";
import { Pills, SearchInput } from "./home.styles";
import useSWR from "swr/immutable";
import { swrFetcher } from "../../libs/axios-instance";
import {matchSorter} from "match-sorter"
const pills = ["projects", "users"];

function Home() {
  const [active, setactive] = useState<'projects'|'users'>("projects");
  const [search, setsearch] = useState<string>("");
  const [filtered, setfiltered] = useState<any[]|null>(null);

  const {
    data: projects,
    mutate: projectMutate
  } = useSWR("projects", swrFetcher.get);

  const {
    data: users,
    error: userError,
    isLoading: userLoading,
    mutate: userMutate,
  } = useSWR(active == 'users' ? "users" : null, swrFetcher.get);


  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.value) {
      setsearch('');
      setfiltered(null)
      return
    }
    setsearch(e.target.value);    
    if(active == 'projects') {
      const filtered = matchSorter(projects.data.projects, e.target.value, {keys: ['name']});
      console.log(filtered);
      
      setfiltered([...filtered])
    }else {
      const filtered = matchSorter(users.data.users, e.target.value, {keys: ['firstname']});
      setfiltered([...filtered])
    }
   
  }

  const changeActive = (active: 'projects'|'users') => {
    setactive(active);
    setfiltered(null);
    setsearch('')
  }


  const renderActive = () => {
    if (active == "projects" && projects) {
      return <ProjectList projects={filtered || projects.data.projects} />;
    }
    if (active == "users" && users) {
      return <UserList users={filtered || users.data.users} />;
    }
    return <></>;
  };

  return (
    <Container>
      <Group css={{ marginBottom: "15px" }} position="apart">
        <Group>
          {pills.map((x:any) => {
            return (
              <Pills key={x} active={x == active} onClick={() => changeActive(x)}>
                <Text>{x}</Text>
              </Pills>
            );
          })}
        </Group>
        <SearchInput
          name="search"
          placeholder="search"
          onChange={handleSearch}
          value={search}
        />
      </Group>
      {renderActive()}
    </Container>
  );
}

export default Home;
