import React, { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    fetch(url)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [url]);

  return {
    loading,
    data,
    error,
  };
}

function GithubUser({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.length} style={{ width: 200 }} />
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

  return (
    <div className="container">
      <GithubUser login={login} />
    </div>
  );
}
