import styled from "@emotion/styled";

export const Body = styled.div((props) => ({
  width: "100vw",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: `"Cinzel",serif`,
  color: "#042fab",
  maxHeight: 80,
  transition: "0.4s ease-in-out",
  scrollBehavior: "smooth",
  position: "relative",
  margin: 0,
  userSelect: " none",
}));
export const Ticker = styled.div((props) => ({
  borderTop: "1px solid #042fab",
  background: "white",
  color: "#042fab",
  fontSize: 72,
  padding: 20,
  fontWeight: 700,
  display: "flex",
  cursor: "pointer",
  position: "relative",
  bottom: props.bottom,
  "&:hover": {
    borderTop: "1px solid #ffc233",
    color: "#ffc233",
  },
}));

export const Content = styled.div((props) => ({
  display: "flex",
  animation: `marquee ${props.time}s linear`,
  animationIterationCount: "infinite",
  whiteSpace: "nowrap",
}));

export const WrappedContent = (props) => {
  return (
    <Content time={props.animationTime}>
      {[...Array(props.times || 2)].map((_, index) => (
        <span key={index}>{props.children}</span>
      ))}
    </Content>
  );
};

export const H4 = styled.h4((props) => ({
  margin: "0 20px",
  height: 100,
}));

export const Folder = styled.div((props) => ({
  width: "90%",
}));
export const Input = styled.input`
  width: 500px;
  height: 100px;
  padding: 30px 50px;
  background-color: #f8f6f2;
  border: none;
  margin: 20px;
  color: #042fab;
  font-size: 32px;
  &:focus-visible {
    outline: 1px solid #042fab;
  }
  &::placeholder {
    color: #042fab;
    font-size: 32px;
  }
`;
