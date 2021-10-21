import * as React from "react";
import { Body, Words, WordsContainer, TextBox } from "./styled";

export default function Feature() {
  const [sticky, setSticky] = React.useState(1);
  const [transform, setTransform] = React.useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [rotate, setRotate] = React.useState([0, 0.1]);
  const text = React.useMemo(
    () => [
      {
        words: "Cute",
        deg: -5,
        x: -16,
        y: -400,
        origin: "center left",
      },
      {
        words: "Fluffy",
        deg: 5,
        x: -16,
        y: -200,
        origin: "center right",
      },
      {
        words: "Vicious",
        deg: -3,
        x: -16,
        y: -10,
        origin: "center left",
      },
    ],
    []
  );

  React.useEffect(() => {
    let currentScroll = 0;
    let scrollVal = 0;
    const listener = () => {
      currentScroll = scrollVal;
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrollVal = scrollTop;
      if (scrollTop > 1980) {
        setSticky(0);
      }
      if (scrollTop < 1980) {
        setSticky(1);
        if (scrollTop > window.screen.availHeight) {
          let degree =
            Math.ceil((scrollTop - window.screen.availHeight) / 94) / 10;
          setTransform([
            [text[0].deg * degree, text[0].x * degree, text[0].y * degree],
            [text[1].deg * degree, text[1].x * degree, text[1].y * degree],
            [text[2].deg * degree, text[2].x * degree, text[2].y * degree],
          ]);
        } else {
          setTransform([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ]);
        }
      }
      if (currentScroll > scrollVal) {
        setRotate([0.3, 0.05]);
        setTimeout(() => setRotate([0, 0.15]), 50);
      } else {
        setRotate([-0.3, 0.05]);
        setTimeout(() => setRotate([0, 0.15]), 50);
      }
    };
    window.addEventListener("scroll", () => listener(), true);
    return window.removeEventListener("scroll", listener);
  }, [text]);
  return (
    <Body
      sticky={sticky}
      transform={`rotateZ(${rotate[0]}deg)`}
      transitionTime={rotate[1]}
    >
      <div style={{ textAlign: "left" }}>
        <h1>Ninjas in fur suit</h1>
        <h1>with knives</h1>
        <h1>hidden in the paws</h1>
      </div>
      <WordsContainer>
        <Words>Cats are medium sized, fluffy felines.</Words>
        <Words>
          Cats love to play and cuddle, but don't be fooled by their cuteness;
        </Words>
        <Words>they have razor sharp claws that can slash out your eyes.</Words>
        <Words>But they're still very cute.</Words>
      </WordsContainer>
      {text.map((ele, i) => (
        <TextBox
          transform={`rotateZ(${transform[i][0]}deg) translate3d(${transform[i][1]}px, ${transform[i][2]}px, 0px)`}
          origin={ele.origin}
          key={i}
        >
          {ele.words}
        </TextBox>
      ))}
    </Body>
  );
}
