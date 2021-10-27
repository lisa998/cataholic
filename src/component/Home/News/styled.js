import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  color: #042fab;
  font-family: "Cinzel", serif;
  position: relative;
  overflow: hidden;
  background: #f8f6f2;
  align-items: center;
`;
export const LinedDiv = styled.div((props) => ({
  borderTop: "1px solid #042fab",
  borderBottom: "1px solid #042fab",
  padding: "20px 0px 20px",
  fontSize: 20,
  display: "flex",
  justifyContent: "center",
  width: "90vw",
  fontWeight: 700,
  margin: "50px 0px",
}));
export const Content = styled.div((props) => ({
  display: "flex",
  width: "90vw",
  position: "relative",
  cursor: "pointer",
}));
export const Text = styled.div((props) => ({
  textAlign: "left",
  marginLeft: 50,
}));
export const Img = styled.img((props) => ({
  width: 350,
  transform: props.hover ? "scale(1.05)" : null,
  transition: "0.2s ease-in",
}));
export const Div = styled.div((props) => ({
  margin: "0px 10px",
  opacity: props.show ? props.hover : +!props.hover,
  transform: props.hover ? "translateX(60px)" : null,
  transition: "0.3s ease-in",
  transitionDelay: `${props.delay}s`,
}));
export const Arrow = styled.i((props) => ({
  top: 30,
  height: 60,
  position: "relative",
  right: 0,
  fontSize: 60,
  color: props.hover ? props.border : "white",
  textShadow: `1px 1px ${props.border}, -1px -1px ${props.border}, 1px -1px ${props.border},
  -1px 1px ${props.border}`,
  transition: "0.2s ease-in",
}));
