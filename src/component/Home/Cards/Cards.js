import { Arrow } from "../Sort/styled";
import { Body, H1 } from "./style";
export default function Cards() {
  return (
    <Body>
      <H1>Things Only Cat Owners Understand</H1>
      <div
        style={{
          width: "90vw",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Arrow
          className="bi bi-arrow-left"
          border={"#042fab"}
          // onClick={nextStep}
        ></Arrow>
        <Arrow
          className="bi bi-arrow-right"
          border={"#042fab"}
          //onClick={prevStep}
        ></Arrow>
      </div>
    </Body>
  );
}
