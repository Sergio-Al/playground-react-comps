import React, { useState } from "react";
import GithubUser from "../GithubUser";
import UserRepositories from "../UserRepositories";
import RepositoryReadme from "../RepositoryReadme";

export default function App() {
  const [login, setLogin] = useState("sergio-al");
  const [repo, setRepo] = useState("create-different");
  return (
    <>
      <GithubUser login={login} />
      <UserRepositories login={login} repo={repo} onSelect={setRepo} />
      <RepositoryReadme login={login} repo={repo} />
    </>
  );
}
