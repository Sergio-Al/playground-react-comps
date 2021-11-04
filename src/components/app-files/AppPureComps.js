import React, { useState, useCallback, memo } from "react";

// pure component
const Cat = ({ name, meow = (f) => f }) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}> {name} </p>;
};

// use of memo with predicate
const PureCat = memo(
  Cat,
  (prevProps, nextProps) => prevProps.name === nextProps.name
);

// useCallback for meowing cat
const AppMeowing = () => {
  const meow = useCallback((name) => console.log(`${name} has meowed`, []));
  return <PureCat name="Biscuit" meow={meow} />;
};

// using All features, // Prompt is not recommended in real apps
const AppAll = () => {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
  const meow = useCallback((name) => console.log(`${name} has meowed`, []));
  return (
    <>
      {cats.map((name, i) => (
        <PureCat key={i} name={name} meow={meow} />
      ))}
      <button onClick={() => setCats([...cats, prompt("name a cat")])}>
        Add a Cat
      </button>
    </>
  );
};

// Don't use propmt in a real app
export default function App() {
  return (
    <div className="container">
      <AppAll />
    </div>
  );
}
