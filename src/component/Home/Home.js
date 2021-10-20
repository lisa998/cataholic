import * as React from "react";
import Introduce from "./Introduce/Introduce";
import Feature from "./Feature/Feature";
import Sort from "./Sort/Sort";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Introduce />
      <Feature />
      <Sort />
    </div>
  );
}
