import * as React from "react";
import Introduce from "./Introduce/Introduce";
import Feature from "./Feature/Feature";
import Sort from "./Sort/Sort";
import Behavior from "./Behavior/Behavior";
import Cards from "./Cards/Cards";
import Reference from "./Reference/Reference";
import News from "./News/News";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Introduce />
        <Feature />
        <Sort />
        <Behavior />
        <Cards />
        <Reference />
        <News />
      </div>
      <Footer />
    </>
  );
}
