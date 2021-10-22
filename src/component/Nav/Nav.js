import * as React from "react";
import { StyledNav, StyledSNS, ContentBtn, Card } from "./styled";

export default function Nav() {
  return (
    <StyledNav>
      <h3>
        <i className="fas fa-cat" style={{ marginRight: 5 }}></i>
        CATAHOLIC
      </h3>
      <SNSs></SNSs>
    </StyledNav>
  );
}
const SNSs = () => {
  const [hover, handleHover] = React.useState(0);
  const sns = [
    {
      className: "fab fa-facebook-square",
      href: "https://www.facebook.com/ESCadrille",
    },
    {
      className: "fab fa-linkedin-in",
      href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHFjTGVk7VX3wAAAXySkzdwUy-uBvait8ve-agNOFZLDdq8JNf9bBYo0pOMxfn1Dx8sRwDJiv0MCONF2QdE4nytRr5xOoJWp1uLC5OzeCKLkI4S8qb2Ejls63PYjmWnQV28Vv8=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fescadrille-toulouse-junior-conseil",
    },
    {
      className: "fab fa-instagram",
      href: "https://www.instagram.com/escadrilletlse/?utm_medium=copy_link",
    },
    {
      className: "fab fa-twitter",
      href: "https://twitter.com/escadrilletlse?s=21",
    },
    {
      className: "fab fa-youtube",
      href: "https://www.youtube.com/channel/UC9udKXz9pR0DOWfpGVuwB8g",
    },
  ];
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {sns.map((ele) => (
        <SNS className={ele.className} href={ele.href} key={ele.className} />
      ))}
      <ContentBtn
        onMouseEnter={() => handleHover(1)}
        onMouseLeave={() => handleHover(0)}
      >
        MENU
        <Card deg={hover ? 0 : -4} />
        <Card deg={hover ? 0 : 4} />
      </ContentBtn>
    </div>
  );
};
const SNS = ({ className, href }) => {
  return (
    <StyledSNS>
      <a href={href}>
        <i className={className} style={{ color: "#042fab" }}></i>
      </a>
    </StyledSNS>
  );
};
