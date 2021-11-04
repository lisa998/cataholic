import { LinedDiv } from "../Home/News/styled";
import { ContentBtn, Card } from "../Nav/styled";
import { sns, SNS } from "../Nav/sns";
import { useState } from "react";

export default function Contact({ End, formfolding }) {
  const [hover, handleHover] = useState(0);
  return (
    <div style={{ width: "90%" }}>
      <LinedDiv
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0px",
        }}
      >
        <div style={{ display: " flex", justifyContent: "space-between" }}>
          <span>address</span>
          <span>+123 456 789</span>
          <span>Contact@cataholic.com</span>
        </div>
        <div>
          <h3 style={{ color: "#f8f6f2", fontSize: 150, margin: 30 }}>
            <i
              className="fas fa-cat"
              style={{ marginRight: 20, fontSize: 250 }}
            ></i>
            CATAHOLIC
          </h3>
        </div>
        <ContentBtn
          style={{ width: 250, margin: "auto", fontWeight: 700 }}
          color="#ffc233"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleHover(0)}
          onClick={formfolding}
        >
          Request for cats' news
          <Card deg={hover ? 0 : -4} style={{ border: `1px solid #ffc233` }} />
          <Card deg={hover ? 0 : 4} style={{ border: `1px solid #ffc233` }} />
        </ContentBtn>
        <div
          style={{
            display: "flex",
            margin: "40px auto 10px",
            fontSize: 28,
            width: 250,
            justifyContent: "space-between",
          }}
        >
          {sns.map((ele) => (
            <SNS
              className={ele.className}
              href={ele.href}
              key={ele.className}
            />
          ))}
        </div>
      </LinedDiv>
      <p ref={End}>2021 CATAHOLIC TOULOUSE JUNIOR CONSEIL</p>
    </div>
  );
}
