import { Body } from "../../Home/Article/styled";
import Footer from "../../Footer/Footer";
import { StyledInfo, H, Line, Bottom } from "./styled";
import { Words } from "../../Home/Feature/styled";

export default function ContactUs() {
  const text = {
    title: "CONTACT US",
    words: [
      "Cats spend half their life asleep and half making viral videos",
      "Bathing cats is a martial art",
      "If the earth was flat, cats would push everything off it",
    ],
    bottomInfo: ["address", "+123 456 789", "Contact@cataholic.com"],
  };
  return (
    <Body style={{ top: 0, position: "relative", color: "#042fab" }}>
      <Info data={text} />
      <Footer />
    </Body>
  );
}
export const Info = ({ data, href }) => {
  return (
    <StyledInfo>
      <H>{data.title}</H>
      <div
        style={{
          position: "relative",
          top: "10%",
        }}
      >
        {data.words.map((ele) => (
          <Words>{ele}</Words>
        ))}
      </div>
      <div style={{ width: "90%", position: "absolute", bottom: "2rem" }}>
        <Line />
        <Bottom>
          {data.bottomInfo.map((ele, i) =>
            href ? (
              <a
                href={"#" + data.bottomInfo[i]}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <h1>{ele}</h1>
              </a>
            ) : (
              <h1>{ele}</h1>
            )
          )}
        </Bottom>
      </div>
    </StyledInfo>
  );
};
