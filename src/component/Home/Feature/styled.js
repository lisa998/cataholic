import styled from "@emotion/styled";

export const Body = styled.div((props) => ({
  display: "flex",
  justifyContent: " center",
  height: "100vh",
  width: "100vw",
  color: "#042fab",
  position: props.sticky ? "sticky" : "relative",
  top: props.sticky ? 70 : window.screen.availHeight + 70,
  left: 0,
}));
