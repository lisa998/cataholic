import * as React from "react";
import { Body, LinedDiv, Div, Content, Text, Img, Arrow } from "./styled";

export default function News() {
  const [hover, setHover] = React.useState(0);
  const [hoverContent, setHoverContent] = React.useState(0);
  const result = {
    url: "https://www.bbc.com/news/uk-wales-59124053",
    urlToImage:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/780A/production/_121303703_newproject.png",
    publishedAt: "Posted at 23:30 1 Nov23:30 1 Nov",
    author: "BBC NEWS",
    title: "Cardiff kitten saved from being set alight by children",
    description:
      "A kitten is recovering after he was rescued from three children threatening to set him alight.",
  };

  return (
    <Body>
      <LinedDiv style={{ justifyContent: "flex-start" }}>popular news</LinedDiv>
      <a href={result.url} style={{ textDecoration: "none", color: "inherit" }}>
        <Content
          onMouseOver={() => setHoverContent(1)}
          onMouseLeave={() => setHoverContent(0)}
        >
          <div style={{ width: 350, overflow: "hidden", flexShrink: 0 }}>
            <Img src={result.urlToImage} alt="" hover={hoverContent} />
          </div>
          <Text>
            <span style={{ color: "#ffc233" }}>{result.publishedAt}</span>
            <span style={{ marginLeft: 20, color: "#ffc233" }}>
              {result.author}
            </span>
            <h3>{result.title}</h3>
            <p style={{ fontFamily: `"Comfortaa",cursive`, color: "black" }}>
              {result.description}
            </p>
          </Text>
          <Arrow
            className="bi bi-arrow-right"
            border={"#042fab"}
            hover={hoverContent}
          ></Arrow>
        </Content>
      </a>
      <a
        href={"https://www.bbc.co.uk/search?q=cat&page=1"}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <LinedDiv
          onMouseOver={() => setHover(1)}
          onMouseLeave={() => setHover(0)}
        >
          <div
            hover={hover}
            style={{
              cursor: "pointer",
              display: "flex",
            }}
          >
            <Div hover={hover} show delay={0.05}>
              {" "}
              ⟶{" "}
            </Div>
            <Div hover={hover} show>
              ⟶{" "}
            </Div>
            <Div hover={hover} style={{ opacity: 1 }}>
              Discover all articles
            </Div>
            <Div hover={hover} delay={0.05}>
              ⟶{" "}
            </Div>
            <Div hover={hover}> ⟶ </Div>
          </div>
        </LinedDiv>
      </a>
    </Body>
  );
}
