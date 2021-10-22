import styled from "@emotion/styled";

export const Body = styled.div((props) => ({
  display: "flex",
  justifyContent: " space-around",
  height: "100vh",
  width: "100vw",
  color: "#042fab",
  fontFamily: `"Cinzel", serif`,
  position: props.sticky ? "sticky" : "relative",
  top: props.sticky ? 70 : window.screen.availHeight + 70,
  left: 0,
  transform: props.transform,
  transition: `transform ${props.transitionTime}s ease-out`,
}));
export const Words = styled.p`
  line-height: 25px;
  font-family: "Comfortaa", cursive;
  font-size: 16px;
  color: black;
  margin: 5px 0;
`;
export const WordsContainer = styled.div((props) => ({
  marginTop: 70,
  display: "flex",
  flexDirection: " column",
  alignItems: "flex-end",
}));
export const TextBox = styled.div((props) => ({
  width: "70vw",
  height: "20vh",
  display: "flex",
  padding: "10px 0",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid #042fab",
  position: "absolute",
  top: "60vh",
  fontSize: "10vw",
  fontFamily: `"Comfortaa", cursive`,
  background: "white",
  transformOrigin: props.origin,
  transform: props.transform,
  transition: "transform 0.1s ease-out",
}));
