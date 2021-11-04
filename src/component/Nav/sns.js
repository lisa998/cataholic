import { StyledSNS } from "./styled";
export const sns = [
  {
    className: "fab fa-facebook-square",
    href: "https://www.facebook.com/Pusheen/",
  },
  {
    className: "fab fa-linkedin-in",
    href: "https://tw.linkedin.com/company/pusheen",
  },
  {
    className: "fab fa-instagram",
    href: "https://www.instagram.com/pusheen/",
  },
  {
    className: "fab fa-twitter",
    href: "https://twitter.com/pusheen",
  },
  {
    className: "fab fa-youtube",
    href: "https://www.youtube.com/c/PusheenTheCat",
  },
];
export const SNS = ({ className, href }) => {
  return (
    <StyledSNS>
      <a href={href}>
        <i className={className} style={{ color: "#042fab" }}></i>
      </a>
    </StyledSNS>
  );
};
