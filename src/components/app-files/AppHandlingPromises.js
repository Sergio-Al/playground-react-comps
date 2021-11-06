import React, { useEffect, useState } from "react";

function GithubUser({ login }) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(console.error);
  }, [login]);

  if (loading) return <h1>loading....</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  return (
    <div className="app-githubUser">
      <img
        className="app-githubUser-img"
        src={data.avatar_url}
        alt={data.login}
      />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <GithubUser login="sergio-al" />
    </div>
  );
}
