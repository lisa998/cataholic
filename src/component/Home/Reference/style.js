import styled from "@emotion/styled";

export const Block = styled.div((props) => ({
  padding: 30,
  margin: 10,
  width: 120,
  backgroundImage: `url(${props.img})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
}));
