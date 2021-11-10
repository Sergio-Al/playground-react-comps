import React, { useState, useEffect } from "react";
import Fetch from "./Fetch";

export default function SearchForm({ value, onSearch = (f) => f }) {
  const [current, setCurrent] = useState(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(current);
  };

  return (
    <Fetch
      uri={`https://api.github.com/users/${value}`}
      renderSuccess={() => (
        <form onSubmit={handleSubmit}>
          <input value={current} onChange={(e) => setCurrent(e.target.value)} />
          <button>Search</button>
        </form>
      )}
    />
  );
}
