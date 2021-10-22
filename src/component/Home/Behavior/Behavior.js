import * as React from "react";
import { Body, Line, H1, ContentBtn, H5 } from "./styled";
import { Words } from "../Feature/styled";

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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: 40,
            width: "100vw",
            justifyContent: "flex-start",
          }}
        >
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </div>
      </div>
    </Body>
  );
}
const Block = () => {
  const [hover, handleHover] = React.useState(0);
  return (
    <ContentBtn
      onMouseEnter={() => handleHover(1)}
      onMouseLeave={() => handleHover(0)}
      hover={hover}
    >
      <div style={{ flex: "0 0 83.333%" }}></div>
      <H5>123</H5>
    </ContentBtn>
  );
};
