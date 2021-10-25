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
  margin: 40,
  cursor: "pointer",
  position: "relative",
  width: 300,
  height: 320,
  display: "flex",
  fontSize: 30,
  flexShrink: 0,
  zIndex: 1,
  transition: "opacity 0.1s linear",
  "&:hover ": {
    background: `linear-gradient(rgb(4 47 171 / 30%), rgb(255 255 255))`,
    color: "#042fab",
    transition: "0.1s linear",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    backgroundImage: `url('${process.env.PUBLIC_URL}/clipArt2.png')`,
    transform: props.hover ? "scale(1.2)" : null,
    backgroundRepeat: "no-repeat",
    width: "50%",
    height: "50%",
    backgroundSize: "100%",
    top: "45%",
    left: "10%",
    opacity: props.hover ? 0.3 : 0,
    transitionProperty: "opacity, transform",
    transitionDuration: "0.1s ,2s ",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    backgroundImage: `url('${props.img}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    opacity: props.hover ? 0 : 0.8,
    transition: "opacity 0.3s linear",
  },
}));
export const H5 = styled.h5((props) => ({
  marginLeft: 50,
  position: "relative",
  textAlign: " left",
  left: 10,
  transform: props.hover
    ? " rotateZ(180deg) translateY(10%)"
    : "rotateZ(180deg)",
  writingMode: "vertical-lr",
  opacity: props.hover ? 0 : 1,
  transition: props.hover
    ? "opacity 0.4s linear, transform 0.2s linear"
    : "opacity 0.3s linear 0.1s",
}));
export const Discover = styled.span((props) => ({
  position: "relative",
  textAlign: " left",
  fontWeight: 700,
  left: -117,
  transform: props.hover
    ? " rotateZ(180deg) "
    : "rotateZ(180deg) translateY(-20%)",
  writingMode: "vertical-lr",
  opacity: props.hover ? 1 : 0,
  transition: props.hover
    ? "opacity 0.5s linear, transform 0.3s linear"
    : "opacity 0.2s linear",
  transitionDelay: props.hover ? `${props.delay}s` : null,
}));
export const P = styled.p((props) => ({
  position: "absolute",
  fontSize: 20,
  left: 20,
  bottom: 10,
  opacity: props.hover ? 1 : 0,
  transition: "0.3s linear",
}));
