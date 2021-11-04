import * as React from "react";
import { Body, P } from "./styled";
import Breeds from "./Breeds";
import { content } from "./content";
import { Arrows } from "./Arraw";

export default function Sort({ pagination }) {
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
    <Body ref={width} style={{ height: pagination ? "90vh" : null }}>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          top: pagination ? null : window.screen.availHeight,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: 60, opacity: pagination ? 0 : 1 }}>
            Cat Breeds
          </h1>
          <Arrows
            steps={steps}
            prevStep={prevStep}
            nextStep={nextStep}
            leftSteps={leftSteps}
          />
        </div>
        <div style={{ margin: 50, overflow: "hidden", display: "flex" }}>
          {content.map((ele, i) => (
            <Breeds content={ele} steps={steps} key={i} num={i + 1} />
          ))}
        </div>
        <P
          hover
          style={{
            fontSize: 26,
            marginLeft: "18vw",
            top: 50,
            display: pagination ? "none" : null,
          }}
        >
          Happy is the home with at least one cat.
        </P>
        <P
          hover
          style={{
            fontSize: 26,
            marginLeft: "18vw",
            display: pagination ? "none" : null,
          }}
        >
          Meow. Meow.
        </P>
      </div>
    </Body>
  );
}
