import React, { useState, useEffect, useLayoutEffect } from "react";
// import ColorList from "./ColorList.js";
// import AddColorForm from "./AddColorForm";

// use of useLayoutEffect to calculate and capture of height and width of a screen
// before the browser paints the render to the screen
function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return [width, height];
}

// another use of useEffect, tracking the mouse position
function useMousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setPosition = ({ x, y }) => {
    setX(x);
    setY(y);
  };

  useLayoutEffect(() => {
    window.addEventListener("mousemove", setPosition);
    return () => window.removeEventListener("mousemove", setPosition);
  }, []);

  return [x, y];
}

export default function App() {
  useEffect(() => console.log("useEffect"));
  useLayoutEffect(() => console.log("useLayoutEffect"));
  return <div className="container">We're ready!</div>;
}