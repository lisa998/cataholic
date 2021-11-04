import * as React from "react";
import axios from "axios";
import { Body, LinedDiv, Div, Content, Text, Img, Arrow } from "./styled";

export default function News() {
  const [hover, setHover] = React.useState(0);
  const [hoverContent, setHoverContent] = React.useState(0);
  const [result, setResult] = React.useState({
    url: "",
    urlToImage: "",
    publishedAt: "",
    author: "",
    title: "",
    description: "",
  });
  /*React.useEffect(() => {
    (async function () {
      let R = await axios.get(
        "https://newsapi.org/v2/everything?qInTitle=cat&language=en&sortBy=popularity&pageSize=2&apiKey=08b7d6af7ef84eaaaf41343c06b5cd2a"
      );
      setResult({
        url: R.data.articles[1].url,
        urlToImage: R.data.articles[1].urlToImage,
        publishedAt: R.data.articles[1].publishedAt,
        author: R.data.articles[1].author,
        title: R.data.articles[1].title,
        description: R.data.articles[1].description,
      });
    })();
  }, []);*/
  return (
    <Body>
      <LinedDiv style={{ justifyContent: "flex-start" }}>popular news</LinedDiv>
      <a href={result.url} style={{ textDecoration: "none" }}>
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
    </Body>
  );
}
