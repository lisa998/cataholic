import styled from "@emotion/styled";

export const StyledNav = styled.div`
  color: #042fab;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  position: fixed;
  width: 90%;
  z-index: 5;
  height: 10vh;
`;

export const StyledSNS = styled.div`
  padding: 0 7.5px;
  &:hover {
    transform: scale(1.05);
  }
`;
export const ContentBtn = styled.div((props) => ({
  border: props.color ? `1px solid ${props.color}` : "1px solid #042fab",
  padding: "13px 28px",
  height: 25,
  margin: 20,
  position: "relative",
  background: "white",
  color: props.color ? props.color : null,
  cursor: "pointer",
  "&:hover ": {
    background: props.color ? props.color : "#042fab",
    color: props.fontColor ? props.fontColor : "white",
  },
}));
export const Card = styled.div((props) => ({
  height: "100%",
  width: "100%",
  position: "absolute",
  zIndex: -1,
  border: props.color ? `1px solid ${props.color}` : "1px solid #042fab",
  left: 0,
  top: 0,
  transition: "transform 0.4s cubic-bezier(.23,1,.32,1)",
  transform: `rotate(${props.deg}deg)`,
  background: props.color ? props.color : "white",
}));
