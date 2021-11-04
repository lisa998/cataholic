import React, { useEffect, useState } from "react";
import { Body, Div } from "./styled";
import { StyledLink } from "../Home/StyledLink";

export default function Menu() {
  const [hover, setHover] = useState(0);
  const [startPlace, setStartPlace] = useState(1);
  const [startAnimation, setStartAnimation] = useState(1);

  const pages = [
    { title: "About Cats", href: "/about" },
    { title: "Breeds", href: "/breeds" },
    { title: "Cat's Behavior", href: "/behavior" },
    { title: "Adopt Don't Shop", href: "/adopt" },
    { title: "Contact Us", href: "/contactus" },
  ];

  useEffect(() => {
    setStartPlace(0);
    setTimeout(() => setStartAnimation(0), 10);
  }, []);
  return (
    <Body>
      <div onMouseLeave={() => setHover(0)}>
        {pages.map((ele, i) => (
          <Option
            option={ele}
            transform={hover > i ? pages.length - i - 1 : pages.length - i}
            key={i}
            i={i}
            setHover={setHover}
            hover={hover > i}
            startAnimation={startAnimation}
            startPlace={startPlace}
          />
        ))}
      </div>
    </Body>
  );
}

const Option = ({
  option,
  transform,
  hover,
  setHover,
  i,
  startAnimation,
  startPlace,
  endAnimation,
}) => {
  return (
    <StyledLink
      to={option.href}
      style={{
        transform: startPlace
          ? `translateY(${transform * 100}%)`
          : `translateY(${transform * 40}%)`,
      }}
    >
      <Div
        transform={startPlace ? transform * 100 : transform * 40}
        onMouseOver={() => setHover(i + 1)}
        startAnimation={startAnimation}
        endAnimation={endAnimation}
        delay={i}
      >
        {option.title}
      </Div>
    </StyledLink>
  );
};
