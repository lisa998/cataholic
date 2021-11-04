import * as React from "react";
import { Body, Line, H1 } from "./styled";
import { Words } from "../Feature/styled";
import { content } from "./content";
import Block from "./Block";

export default function Behavior() {
  const wordsStyle = {
    textAlign: "left",
    width: "68vw",
    top: -20,
    position: "relative",
  };
  return (
    <Body>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Line />
        <H1>
          cats better than dogs. cats better than dogs. cats better than dogs.
        </H1>
        <Line />
        <h1 style={{ fontSize: 60, textAlign: "left", width: "70vw" }}>
          Cat Behavior
        </h1>
        <Words style={wordsStyle}>
          Find out more about common cat behavior issues
        </Words>
        <Words style={wordsStyle}>
          to help you address some of our feline friends' behaviors and habits.
        </Words>
        <Blocks />
      </div>
    </Body>
  );
}
export const Blocks = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: 40,
        width: "98vw",
        justifyContent: "flex-start",
      }}
    >
      {content.map((ele, i) => (
        <Block content={ele} key={i} />
      ))}
    </div>
  );
};
