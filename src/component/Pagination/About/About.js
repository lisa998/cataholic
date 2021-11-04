import { Info } from "../ContactUs/ContactUs";
import { Body } from "../../Home/Article/styled";
import Footer from "../../Footer/Footer";
import { info } from "./content.js";
import { H, P } from "../../Home/Article/styled";

export default function About() {
  const text = {
    title: "About cat",
    words: [
      "It may be true that you can't buy love, but you sure can adopt it!",
      " A recent study shows Americans are now more inclined to adopt their pet,",
      " as opposed to purchasing from a breeder or pet store.",
    ],
    bottomInfo: [],
  };
  for (let i = 0; i < info.habits.length; i++) {
    text.bottomInfo.push(info.habits[i].title);
  }
  return (
    <Body style={{ top: 0, position: "relative", color: "#042fab" }}>
      <Info data={text} href />
      <Content text={text} />
      <Footer />
    </Body>
  );
}
const Content = ({ text }) => {
  return (
    <div style={{ padding: "3rem" }}>
      {Object.keys(info.info).map((ele) => (
        <>
          <H> {ele}</H>
          <P>{info.info[ele]}</P>
        </>
      ))}
      {info.habits.map((ele, i) => (
        <div style={{ padding: "3rem" }}>
          <H id={text.bottomInfo[i]}>
            <span>#{i + 1}</span>&nbsp;&nbsp;
            {ele.title}
          </H>
          <P>{ele.words}</P>
        </div>
      ))}
    </div>
  );
};
