import { useEffect, useState } from "react";
import { Body, Img, Content, Line, Block, H, P } from "./styled";
import Sort from "../Sort/Sort";
import Footer from "../../Footer/Footer";
import { Blocks } from "../Behavior/Behavior";

export default function Article({ content, breeds }) {
  const [start, setStart] = useState(0);

  useEffect(() => {
    setTimeout(() => setStart(1), 0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Body>
      <Line first />
      <div
        style={{
          display: "flex",
          height: "90vh",
          background: "#f8f6f2",
        }}
      >
        <div style={{ flex: "6 0 0", overflow: "hidden" }}>
          <Img
            src={content.img}
            alt={content.title}
            style={{
              opacity: start ? 1 : 0,
              transform: start ? null : "scale(1.15) rotate(-5deg)",
            }}
          />
        </div>
        <Content>
          <H
            style={{
              fontSize: 60,
              opacity: start ? 1 : 0,
              transform: start ? null : "translateY(50%)",
            }}
          >
            {content.title}
          </H>
          <P style={{ lineHeight: "2rem" }}>
            {breeds ? content.description : content.content}
          </P>
        </Content>
      </div>
      {breeds ? <Data data={content.data} /> : null}
      {breeds ? <Feature data={content.feature} /> : null}
      <Line words={breeds ? '"Cat Breeds"' : '"Cat Behavior"'} />
      {breeds ? <Sort pagination /> : <Blocks />}
      <Footer />
    </Body>
  );
}
const Feature = ({ data }) => {
  let style = {
    height: "60vh",
    position: "relative",
    transform: "translateY(-50%)",
    top: "50%",
    padding: 20,
  };
  return (
    <div style={{ display: "flex", height: "90vh", padding: 50 }}>
      <Img src={data.img} alt="" style={style} />
      <Content>
        <H style={{ fontSize: 40 }}>temperament</H>
        <P>{data.temperament}</P>
        <H style={{ fontSize: 40 }}>characteristics</H>
        <P>{data.characteristics}</P>
      </Content>
    </div>
  );
};
const Data = ({ data }) => {
  return (
    <>
      <div style={{ display: "flex", width: "90vw", margin: "50px 5vw " }}>
        {Object.keys(data).map((ele) => (
          <Block>
            <H style={{ fontSize: 60 }}>{data[ele].replace("-", " - ")}</H>
            <Line />
            <P>{ele.replace("_", " ").replace("_", " ")}</P>
          </Block>
        ))}
      </div>
      <Line words='"Other features"' />
    </>
  );
};
