import * as React from "react";
import { Body, Words, Title, Img } from "./styled";
import { ContentBtn, Card } from "../../Nav/styled";
export default function Introduce() {
  const [hover, handleHover] = React.useState(0);
  const ImgUrl = "https://images.unsplash.com/";
  const ImgSrc = [
    {
      src: "photo-1586289883499-f11d28aaf52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      delay: 1,
    },
    {
      src: "photo-1566765790386-c43812572bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      delay: 3,
    },
    {
      src: "photo-1549545931-59bf067af9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      delay: 1.5,
    },
    {
      src: "photo-1589811214507-96fea403c931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      delay: 3.5,
    },
  ];
  return (
    <Body>
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-around",
          width: "100vw",
        }}
      >
        {ImgSrc.map((ele, i) => (
          <Img src={ImgUrl + ele.src} alt="" delay={ele.delay} key={i} />
        ))}
      </div>
      <div
        style={{
          textAlign: "left",
          margin: "150px 50px 0px 100px",
          lineHeight: 1.5,
        }}
      >
        <Title style={{ position: "relative" }}>WHAT DO YOU CALL </Title>
        <Title>A PILE OF CATS</Title>
        <Title style={{ position: "relative" }}>A MEOWTAIN</Title>
        <ContentBtn
          style={{ width: 115, marginTop: 120 }}
          color="#ffc233"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleHover(0)}
        >
          Contact us
          <Card deg={hover ? 0 : -4} style={{ border: `1px solid #ffc233` }} />
          <Card deg={hover ? 0 : 4} style={{ border: `1px solid #ffc233` }} />
        </ContentBtn>
      </div>
      <div
        style={{
          width: 400,
          textAlign: "left",
          marginTop: 400,
          position: "relative",
          left: -70,
        }}
      >
        <Words>
          Cats spend half their life asleep and half making viral videos
        </Words>
        <Words>Bathing cats is a martial art</Words>
        <Words>If the earth was flat, cats would push everything off it</Words>
      </div>
    </Body>
  );
}
