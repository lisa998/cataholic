import { Card } from "../../Nav/styled";
import { ContentBtn } from "./styled";
import { H5, P, Discover } from "./styled";
import { StyledLink } from "../StyledLink";
import * as React from "react";

export default function Breeds({ content, steps }) {
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
        steps={steps}
      >
        <H5 hover={hover}>{content.title}</H5>
        <Content
          hover={hover}
          content={content.description.split(".")}
        ></Content>
        <Card deg={hover ? -4 : 0} color={hover ? null : "transparent"} />
        <Card deg={hover ? 4 : 0} color={hover ? null : "transparent"} />
      </ContentBtn>
    </StyledLink>
  );
}
const Content = ({ content, hover }) => {
  let lastTime = content.length;
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      {content.map((ele, i) => (
        <P hover={hover} key={i} time={`0.${i * 2}s`}>
          {ele}
        </P>
      ))}
      <Discover hover={hover} time={`0.${lastTime * 2}s`}>
        ⟶ ⟶ ⟶ Discover ⟶ ⟶ ⟶ ⟶ ⟶ ⟶ ⟶ ⟶ ⟶ ⟶ ⟶
      </Discover>
    </div>
  );
};
