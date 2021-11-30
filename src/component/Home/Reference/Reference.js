import { Words } from "../Feature/styled";
import { Body } from "../Behavior/styled";
import { Block } from "./style";

export default function Reference() {
  const img = [
    {
      href: "https://www.thesprucepets.com/things-only-cat-owners-understand-4154832",
      img: "/spruce.jpg",
    },
    {
      href: "https://www.thedrakecenter.com/services/cats/blog/15-strange-cat-behaviors-explained",
      img: "/drake.jpg",
    },
    { href: "https://www.purina.com/cats/cat-breeds", img: "/purina.jpg" },
    {
      href: "https://vetschoice.guildinsurance.com.au/",
      img: "/vetchoice.jpg",
    },
    {
      href: "https://www.wondercide.com/blogs/news/5-reasons-to-adopt-dont-shop",
      img: "/wondercide.jpg",
    },
    {
      href: "https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat",
      img: "/nationalGeographic.jpg",
    },
  ];
  const wordsStyle = {
    textAlign: "left",
    width: "68vw",
    position: "relative",
  };
  return (
    <Body style={{ flexDirection: "column", alignItems: "center" }}>
      <h1
        style={{
          fontSize: 60,
          textAlign: "left",
          width: "70vw",
          marginBottom: 10,
        }}
      >
        Reference
      </h1>
      <Words style={wordsStyle}>This website is only for practicing.</Words>
      <div style={{ display: "flex", marginBottom: 40 }}>
        {img.map((ele, i) => (
          <a href={ele.href} key={i}>
            <Block img={process.env.PUBLIC_URL + ele.img} />
          </a>
        ))}
      </div>
    </Body>
  );
}
