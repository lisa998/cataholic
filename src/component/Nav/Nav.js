import * as React from "react";
import { useHistory } from "react-router-dom";
import { StyledNav, ContentBtn, Card } from "./styled";
import { sns, SNS } from "./sns";
import { StyledLink } from "../Home/StyledLink";

export default function Nav() {
  return (
    <StyledNav>
      <StyledLink to="/">
        <h3>
          <i className="fas fa-cat" style={{ marginRight: 5 }}></i>
          CATAHOLIC
        </h3>
      </StyledLink>
      <SNSs></SNSs>
    </StyledNav>
  );
}
const SNSs = () => {
  const [hover, handleHover] = React.useState(0);
  const history = useHistory();
  const goBack = () => {
    if (history.location.pathname === "/menu") {
      history.goBack();
    }
  };
  return (
    <div style={{ display: "flex", alignItems: "center", fontSize: 16 }}>
      {sns.map((ele) => (
        <SNS className={ele.className} href={ele.href} key={ele.className} />
      ))}
      <StyledLink to="/menu" onClick={goBack}>
        <ContentBtn
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleHover(0)}
        >
          MENU
          <Card deg={hover ? 0 : -4} />
          <Card deg={hover ? 0 : 4} />
        </ContentBtn>
      </StyledLink>
    </div>
  );
};
