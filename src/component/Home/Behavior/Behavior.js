import * as React from "react";
import { Body, Line, H1, ContentBtn, H5, P, Discover } from "./styled";
import { Words } from "../Feature/styled";
import { content } from "./content";

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
          {content.map((ele, i) => (
            <Block content={ele} key={i} />
          ))}
        </div>
      </div>
    </Body>
  );
}
const Block = ({ content }) => {
  const [hover, handleHover] = React.useState(0);
  return (
    <ContentBtn
      onMouseEnter={() => handleHover(1)}
      onMouseLeave={() => handleHover(0)}
      hover={hover}
      img={content.img}
    >
      <div style={{ flex: "0 0 83.333%" }}></div>
      <H5 hover={hover}>{content.title}</H5>
      <div style={{ position: "relative", left: 42, bottom: -105 }}>
        <Discover
          delay={0.3}
          style={{ fontSize: 40, position: "relative" }}
          hover={hover}
        >
          <i className="fas fa-long-arrow-alt-down"></i>
        </Discover>
        <Discover
          delay={0.4}
          style={{ fontSize: 40, position: "relative" }}
          hover={hover}
        >
          <i className="fas fa-long-arrow-alt-down"></i>
        </Discover>
        <Discover
          delay={0.5}
          hover={hover}
          style={{ fontSize: 26, position: "relative" }}
        >
          dicover
        </Discover>
      </div>
      <P hover={hover}>{content.title}</P>
    </ContentBtn>
  );
};
