import * as React from "react";
import { Body } from "./styled";

export default function Feature() {
  const [sticky, setSticky] = React.useState(1);
  React.useEffect(() => {
    const listener = () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollTop);
      if (scrollTop > 1987) {
        setSticky(0);
      }
      if (scrollTop < 1987) {
        setSticky(1);
      }
    };
    window.addEventListener("scroll", () => listener(), true);
  }, []);
  return (
    <Body sticky={sticky}>
      <div>
        <h1>Ninjas in fur suit with knives hidden in the paws.</h1>
        <h1>with knives</h1>
        <h1>hidden in the paws</h1>
      </div>
    </Body>
  );
}
