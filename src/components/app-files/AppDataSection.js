import React, { useState } from "react";
import GithubUser from "../GithubUser";
import UserRepositories from "../UserRepositories";
import RepositoryReadme from "../RepositoryReadme";
import SearchForm from "../SearchForm";

export default function App() {
  const [login, setLogin] = useState("sergio-al");
  const [repo, setRepo] = useState("create-different");

  const handleSearch = (login) => {
    if (login) return setLogin(login);
    setLogin("");
    setRepo("");
  };

  if (!login) return <SearchForm value={login} onSearch={handleSearch} />;

  return (
    <div className="container">
      <SearchForm value={login} onSearch={handleSearch} />
      <GithubUser login={login} />
      <UserRepositories login={login} repo={repo} onSelect={setRepo} />
      <RepositoryReadme login={login} repo={repo} />
    </div>
  );
}
