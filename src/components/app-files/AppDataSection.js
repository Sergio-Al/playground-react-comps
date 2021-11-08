import React, { useState } from "react";
import GithubUser from "../GithubUser";

export default function App() {
  const [login] = useState("sergio-al");
  return (
    <div className="container">
      <GithubUser login={login} />
    </div>
  );
}
