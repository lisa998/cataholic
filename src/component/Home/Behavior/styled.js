import styled from "@emotion/styled";
export const Body = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  color: #042fab;
  font-family: "Cinzel", serif;
  position: relative;
  overflow: hidden;
`;

export const Line = styled.div`
  width: 95vw;
  height: 1px;
  background-color: #042fab;
`;

export const H1 = styled.h1((props) => ({
  fontSize: 120,
  whiteSpace: "nowrap",
  margin: 0,
  animation: "scroller 5s linear",
  animationIterationCount: "infinite",
  textAlign: "left",
}));
export const ContentBtn = styled.div((props) => ({
  margin: 30,
  position: "relative",
  background: `white`,
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  background: "rgb(4 47 171 / 30%)",
  width: 300,
  height: 320,
  display: "flex",
  transition: "background 0.3s linear, transform 0.5s ease-in",
  fontSize: 30,
  flexShrink: 0,
  zIndex: 1,
  "&:hover ": {
    background: `linear-gradient(rgb(4 47 171 / 30%), rgb(255 255 255))`,
    color: "#042fab",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    backgroundImage: `url('${process.env.PUBLIC_URL}/clipArt2.png')`,
    backgroundRepeat: "no-repeat",
    width: "50%",
    height: "50%",
    backgroundSize: "100%",
    top: "45%",
    left: "10%",
    opacity: props.hover ? 0.3 : 0,
    transition: "0.1s linear",
  },
}));
export const H5 = styled.h5`
  margin-left: 50px;
  position: relative;
  text-align: left;
  left: 10px;
  transform: rotateZ(180deg);
  writing-mode: vertical-lr;
`;
