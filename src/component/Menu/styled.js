import styled from "@emotion/styled";
export const Body = styled.div((props) => ({
  width: "100vw",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: `"Cinzel",serif`,
  color: "#042fab",
  scrollBehavior: "smooth",
  justifyContent: "flex-end",
  height: "66vh",
  top: "34vh",
  position: "relative",
}));
export const Div = styled.div((props) => ({
  width: "100vw",
  borderTop: "3px solid #042fab",
  fontSize: "6.5vw",
  fontWeight: 500,
  padding: "2rem",
  transition: props.startAnimation
    ? "1s cubic-bezier(.23,1,.32,1)"
    : "0.4s cubic-bezier(.23,1,.32,1)",
  transform: `translateY(${props.transform}%)`,
  transitionDelay: props.startAnimation
    ? `0.${props.startAnimation * props.delay}s`
    : `0.${props.endAnimation * props.delay * 3}s`,
  background: "white",
  "&:hover": {
    color: "#ffc223",
    borderTop: "3px solid #ffc223",
  },
}));
