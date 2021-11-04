import { Info } from "../ContactUs/ContactUs";
import { Body } from "../../Home/Article/styled";
import Footer from "../../Footer/Footer";
import { reason } from "./content";
import { H, P } from "../../Home/Article/styled";

export default function Adopt() {
  const text = {
    title: "Adopt Don't Shop",
    words: [
      "It may be true that you can't buy love, but you sure can adopt it!",
      " A recent study shows Americans are now more inclined to adopt their pet,",
      " as opposed to purchasing from a breeder or pet store.",
    ],
    bottomInfo: [
      "save lifes",
      "save money",
      "pets may be already trained",
      "more choices",
      "love is unconditional",
    ],
  };
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
      <img
        src={
          "https://catrescuediaries.files.wordpress.com/2019/04/kittensf-e1555252206637.jpg?w=887"
        }
        alt=""
      />
      {reason.map((ele, i) => (
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
