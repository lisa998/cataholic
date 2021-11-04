import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100vw;
  position: relative;
  top: 100px;
`;
export const Img = styled.img((props) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "0.6s ease-in-out",
}));
export const Content = styled.div`
  flex: 4 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;
export const Line = styled.div((props) => ({
  width: props.first ? "100%" : "90%",
  height: 1,
  background: "#042fab",
  position: "relative",
  transform: "translateX(-50%)",
  right: "-50%",
  "&::after": {
    content: props.words || '""',
    fontSize: 20,
    color: "#042fab",
    position: "absolute",
    left: 0,
    top: 10,
  },
}));
export const Block = styled.div`
  flex: 0 0 25%;
  display: flex;
  height: 30vh;
  flex-direction: column;
  justify-content: center;
`;
export const H = styled.h2((props) => ({
  color: "#042fab",
  fontFamily: `"Cinzel", serif`,
  margin: 0,
  transition: "0.6s ease-in-out",
}));
export const P = styled.p((props) => ({
  color: "black",
  fontFamily: ` "Comfortaa",cursive`,
}));
