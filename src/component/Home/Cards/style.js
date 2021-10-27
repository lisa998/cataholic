import styled from "@emotion/styled";

export const Body = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
  color: #042fab;
  font-family: "Cinzel", serif;
  position: relative;
  overflow: hidden;
  background: #f8f6f2;
  align-items: center;
`;
export const H1 = styled.h1`
  font-size: 80px;
  color: #f8f6f2;
  text-shadow: 2px 2px #ffc233, -1px -1px #ffc233, 1px -1px #ffc233,
    -1px 1px #ffc233;
  position: absolute;
  top: 30px;
`;
export const Card = styled.div((props) => ({
  border: "3px solid #042fab",
  width: "50vw",
  height: "50vh",
  padding: 30,
  transform: props.transform,
  position: "absolute",
  top: "30vh",
  backgroundColor: "white",
  transition: props.state ? "0.6s ease-in-out " : null,
  fontSize: 20,
}));
export const P = styled.h2((props) => ({
  fontFamily: `"Comfortaa",cursive`,
  lineHeight: "2.5rem",
}));
