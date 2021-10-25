import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  justify-content: space-around;
  height: 220vh;
  width: 100vw;
  color: #042fab;
  font-family: "Cinzel", serif;
  position: relative;
  overflow: hidden;
`;
export const Arrow = styled.i((props) => ({
  fontSize: 72,
  position: "relative",
  top: 30,
  height: 60,
  opacity: props.disable ? 0.3 : 1,
  "&:hover": {
    opacity: props.disable ? null : 1,
    cursor: props.disable ? null : "pointer",
    color: props.disable ? null : props.border,
  },
  textShadow: `1px 1px ${props.border}, -1px -1px ${props.border}, 1px -1px ${props.border},
  -1px 1px ${props.border}`,
  color: "white",
}));
export const ContentBtn = styled.div((props) => ({
  margin: 15,
  position: "relative",
  background: `linear-gradient(rgb(4 47 171 / 30%), rgb(255 255 255))`,
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  width: 300,
  height: 300,
  padding: "30px 30px 20px",
  display: "flex",
  flexDirection: "column",
  transition: "background 0.3s linear, transform 0.5s ease-in",
  fontSize: 30,
  flexShrink: 0,
  transform: `translateX(${-390 * props.steps}px)`,
  zIndex: 1,
  "&:hover ": {
    background: "white",
    color: "#042fab",
    border: "1px solid #042fab",
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
    opacity: props.hover ? 0.1 : 0.3,
    transition: "0.1s linear",
  },
}));
export const H5 = styled.h5((props) => ({
  transform: props.hover
    ? "translateX(-50%)"
    : " translateX(-50%) translateY(260px)",
  margin: 0,
  transition: "linear .2s",
  position: "relative",
  top: 30,
  left: "50%",
}));
export const P = styled.p((props) => ({
  fontSize: 10,
  textAlign: "left",
  top: 30,
  position: "relative",
  transition: props.hover ? "0.2s linear" : null,
  transform: props.hover ? null : "translateY(30px)",
  opacity: props.hover ? 1 : 0,
  fontFamily: `"Comfortaa", cursive`,
  transitionDelay: props.hover ? props.time : null,
}));
export const Discover = styled.p((props) => ({
  fontSize: 16,
  fontWeight: 700,
  textAlign: "left",
  bottom: 0,
  position: "absolute",
  transition: props.hover ? "linear 0.6s" : null,
  opacity: props.hover ? 1 : 0,
  fontFamily: `"Cinzel", cursive`,
  transitionDelay: props.hover ? props.time : null,
  transform: props.hover ? null : "translateX(-100px)",
  whiteSpace: "nowrap",
}));
