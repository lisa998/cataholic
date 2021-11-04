import * as React from "react";
import { ContentBtn, H5, P, Discover } from "./styled";
import { StyledLink } from "../StyledLink";

export default function Block({ content }) {
  const [hover, handleHover] = React.useState(0);
  const link = React.useMemo(
    () => content.title.toLowerCase().replace(" ", "-"),
    [content]
  );
  return (
    <StyledLink to={`/${link}`}>
      <ContentBtn
        onMouseEnter={() => handleHover(1)}
        onMouseLeave={() => handleHover(0)}
        hover={hover}
        img={content.img}
      >
        <div style={{ flex: "0 0 83.333%" }}></div>
        <H5 hover={hover}>{content.title}</H5>
        <div style={{ position: "relative", left: 42, bottom: -105 }}>
          <Discover
            delay={0.3}
            style={{ fontSize: 40, position: "relative" }}
            hover={hover}
          >
            <i className="fas fa-long-arrow-alt-down"></i>
          </Discover>
          <Discover
            delay={0.4}
            style={{ fontSize: 40, position: "relative" }}
            hover={hover}
          >
            <i className="fas fa-long-arrow-alt-down"></i>
          </Discover>
          <Discover
            delay={0.5}
            hover={hover}
            style={{ fontSize: 26, position: "relative" }}
          >
            Dicover
          </Discover>
        </div>
        <P hover={hover}>{content.title}</P>
      </ContentBtn>
    </StyledLink>
  );
}
