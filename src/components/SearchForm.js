import React, { useState, useEffect } from "react";

export default function SearchForm({ value, onSearch = (f) => f }) {
  const [current, setCurrent] = useState(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(current);
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={current} onChange={(e) => setCurrent(e.target.value)} />
        <button>Search</button>
      </form>
    </>
  );
}
