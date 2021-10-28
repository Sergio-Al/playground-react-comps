import React, { useState } from "react";
import colorData from "../utils/color-data.json";
import ColorList from "./ColorList.js";

export default function App() {
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
}
