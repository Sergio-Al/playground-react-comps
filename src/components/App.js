import React, { useEffect, useLayoutEffect } from "react";
// import ColorList from "./ColorList.js";
// import AddColorForm from "./AddColorForm";

export default function App() {
  useEffect(() => console.log("useEffect"));
  useLayoutEffect(() => console.log("useLayoutEffect"));
  return <div className="container">We're ready!</div>;
}
