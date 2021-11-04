import { Info } from "../ContactUs/ContactUs";
import { Body } from "../../Home/Article/styled";
import Footer from "../../Footer/Footer";
import { Blocks } from "../../Home/Behavior/Behavior";

export default function Behavior() {
  const text = {
    title: "Cat Behavior",
    words: [
      "Does your cat's behavior confuse and frustrate you,",
      "making you think you are the only one with such a crazy cat?",
      "You are not the only one, and surprisingly your cat might be considered completely normal.",
    ],
    bottomInfo: [""],
  };
  return (
    <Body style={{ top: 0, position: "relative", color: "#042fab" }}>
      <Info data={text} />
      <Blocks />
      <Footer />
    </Body>
  );
}
