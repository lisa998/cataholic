import { Arrow } from "./styled";

export const Arrows = ({ steps, prevStep, nextStep, leftSteps }) => {
  return (
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
  );
};
