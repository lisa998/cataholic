import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  backgroundcolor: #f8f6f2;
  color: #042fab;
  font-family: "Cinzel", serif;
  position: relative;
  overflow: hidden;
`;
export const Title = styled.h1((props) => ({
  fontSize: 80,
  margin: 5,
}));
export const Words = styled.p`
  line-height: 25px;
  font-family: "Comfortaa", cursive;
  font-size: 16px;
  color: black;
  margin: 5px 0;
`;

export const Img = styled.img((props) => ({
  width: 300,
  height: 400,
  margin: "1vw",
  position: "relative",
  opacity: 0,
  animationName: "picSlide",
  animationDuration: "6s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
  animationDelay: `${props.delay}s`,
}));
