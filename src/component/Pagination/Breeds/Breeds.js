import { Info } from "../ContactUs/ContactUs";
import { Body } from "../../Home/Article/styled";
import Footer from "../../Footer/Footer";
import Sort from "../../Home/Sort/Sort";

export default function Breeds() {
  const text = {
    title: "Breeds",
    words: [
      "Learn about the characteristics and behaviors of your cat's breed or,",
      " if you're planning on adopting,",
      " which breeds may be best suited for you and your family.",
    ],
    bottomInfo: [""],
  };
  return (
    <Body style={{ top: 0, position: "relative", color: "#042fab" }}>
      <Info data={text} />
      <div style={{ top: "-100vh", position: "relative", height: "105vh" }}>
        <Sort />
      </div>
      <Footer />
    </Body>
  );
}
