import * as React from "react";
import { Body, Arrow, H5, P, Discover } from "./styled";
import { Card } from "../../Nav/styled";
import { ContentBtn } from "./styled";
import { content } from "./content";

export default function Sort() {
  const [steps, setSteps] = React.useState(0);
  const width = React.useRef();
  let leftSteps = React.useRef();
  React.useEffect(() => {
    leftSteps.current =
      content.length - Math.floor((width.current.clientWidth - 100) / 390);
  }, []);

  const nextStep = () => {
    if (steps < leftSteps.current) {
      setSteps((steps) => steps + 1);
    }
  };
  const prevStep = () => {
    if (steps > 0) {
      setSteps((steps) => steps - 1);
    }
  };
  return (
    <Body ref={width}>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          top: window.screen.availHeight,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <h1 style={{ fontSize: 60 }}>Cat Breeds</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Arrow
              className="bi bi-arrow-right"
              disable={steps === 0}
              onClick={prevStep}
              border={"#042fab"}
            ></Arrow>
            <Arrow
              className="bi bi-arrow-left"
              disable={steps === leftSteps.current}
              border={"#042fab"}
              onClick={nextStep}
            ></Arrow>
          </div>
        </div>
        <div style={{ margin: 50, overflow: "hidden", display: "flex" }}>
          {content.map((ele, i) => (
            <Breeds content={ele} steps={steps} key={i} num={i + 1} />
          ))}
        </div>
        <P hover style={{ fontSize: 26, marginLeft: "18vw", top: 50 }}>
          Happy is the home with at least one cat.
        </P>
        <P hover style={{ fontSize: 26, marginLeft: "18vw" }}>
          Meow. Meow.
        </P>
      </div>
    </Body>
  );
}
const Breeds = ({ num, content, steps }) => {
  const [hover, handleHover] = React.useState(0);

  return (
    <ContentBtn
      onMouseEnter={() => handleHover(1)}
      onMouseLeave={() => handleHover(0)}
      hover={hover}
      steps={steps}
    >
      <H5 hover={hover}>{content.title}</H5>
      <Content hover={hover} content={content.content}></Content>
      <Card deg={hover ? -4 : 0} color={hover ? null : "transparent"} />
      <Card deg={hover ? 4 : 0} color={hover ? null : "transparent"} />
    </ContentBtn>
  );
};
const Content = ({ content, hover }) => {
  let lastTime = content.length;
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      {content.map((ele, i) => (
        <P hover={hover} key={i} time={`0.${i * 2}s`}>
          {ele}
        </P>
      ))}
      <Discover hover={hover} time={`0.${lastTime * 2}s`}>
        ⟶ ⟶ ⟶ Discover ⟶ ⟶ ⟶ ⟶ ⟶ ⟶ ⟶ ⟶ ⟶ ⟶ ⟶
      </Discover>
    </div>
  );
};
