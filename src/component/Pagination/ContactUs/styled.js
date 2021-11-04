import styled from "@emotion/styled";

export const StyledInfo = styled.div((props) => ({
  height: "100vh",
  background: "#f3f1ed",
  position: "relative",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "&:before": {
    content: '""',
    position: "absolute",
    width: "50%",
    height: "50%",
    top: "15%",
    backgroundSize: "cover",
    opacity: 0.3,
    backgroundImage:
      "url('https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_26/3487828/210630-stock-cat-bed-ew-245p.jpg')",
  },
}));
export const H = styled.h1((props) => ({
  fontSize: 80,
  fontFamily: `"Cinzel", serif`,
  position: "relative",
  top: "-5%",
}));
export const Line = styled.div((props) => ({
  height: 1,
  background: "#042fab",
  position: "relative",
}));
export const Bottom = styled.div((props) => ({
  display: " flex",
  justifyContent: "space-between",
  fontFamily: `"Cinzel", serif`,
}));
