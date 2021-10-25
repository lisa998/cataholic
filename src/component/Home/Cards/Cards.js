import { Arrow } from "../Sort/styled";
import { Body, H1, Card, P } from "./style";
import { content } from "./content";
import * as React from "react";

export default function Cards() {
  const [page, setPage] = React.useState(0);
  const [state, setState] = React.useState(0);
  const nextPage = () => {
    setState(1);
    setTimeout(() => {
      setPage((page) => (page + 1) % 5);
      setState(0);
    }, 800);
  };
  const prevPage = () => {
    setState(-1);
    setTimeout(() => {
      setPage((page) => {
        if (page === 0) {
          return 4;
        } else {
          return page - 1;
        }
      });
      setState(0);
    }, 800);
  };
  return (
    <Body>
      <H1>Things Only Cat Owners Understand</H1>
      <div
        style={{
          width: "90vw",
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
        }}
      >
        <Arrow
          className="bi bi-arrow-left"
          border={"#042fab"}
          onClick={prevPage}
        ></Arrow>
        <Arrow
          className="bi bi-arrow-right"
          border={"#042fab"}
          onClick={nextPage}
        ></Arrow>
      </div>
      <Card transform={"rotateZ(4deg)"} />
      <Card transform={"rotateZ(-6deg)"} />
      <Card>
        {content[(page + 1) % 5].title}
        <P>{content[(page + 1) % 5].content}</P>
      </Card>
      <Card
        state={+(state === -1)}
        transform={
          state === -1 ? null : "translate(-80vw, -80vh) skewY(-15deg)"
        }
      >
        {content[page].title}
        <P>{content[page].content}</P>
      </Card>
      <Card
        state={+(state === 1)}
        transform={state === 1 ? null : "translate(70vw, 70vh) skewY(-15deg)"}
      >
        {content[(page + 2) % 5].title}
        <P>{content[(page + 2) % 5].content}</P>
      </Card>
    </Body>
  );
}
