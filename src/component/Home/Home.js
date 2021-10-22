import * as React from "react";
import Introduce from "./Introduce/Introduce";
import Feature from "./Feature/Feature";
import Sort from "./Sort/Sort";
import Behavior from "./Behavior/Behavior";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Introduce />
      <Feature />
      <Sort />
      <Behavior />
    </div>
  );
}
