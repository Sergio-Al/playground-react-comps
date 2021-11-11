import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm";
import { GraphQLClient } from "graphql-request";

const query = `
query findRepos($login: String!) {
  user(login: $login) {
    login
    name
    location
    avatar_url: avatarUrl
    repositories(first: 100) {
      totalCount
      nodes {
        name
      }
    }
  }
}`;

const client = new GraphQLClient(`https://api.github.com/graphql`, {
  headers: {
    Authorization: `Bearer <Your secret github api key>`,
  },
});

client
  .request(query, { login: "sergio-al" })
  .then((results) => JSON.stringify(results, null, 2))
  .then(console.log)
  .catch(console.error);

function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

function UserDetails({ data }) {
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

export default function App() {
  const [login, setLogin] = useState("sergio-al");
  const [userData, setUserData] = useState();

  useEffect(() => {
    client
      .request(query, { login })
      .then(({ user }) => user)
      .then(setUserData)
      .catch(console.error);
  }, [client, query, login]);

  if (!userData) return <p>loading...</p>;

  return (
    <div className="container">
      <SearchForm value={login} onSearch={setLogin} />
      <UserDetails data={userData} />
      <p>{userData.repositories.totalCount} - repos</p>
      <List
        data={userData.repositories.nodes}
        renderItem={(repo) => <span>{repo.name}</span>}
      />
    </div>
  );
}
