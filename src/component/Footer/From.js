import { Folder, Input } from "./styled";
import { ContentBtn, Card } from "../Nav/styled";
import { useState } from "react";

export default function Form({ formRef }) {
  const [hover, handleHover] = useState(0);
  const [value, setValue] = useState({ Name: "", Email: "", Address: "" });
  return (
    <Folder>
      <h3>
        This website is only for practicing, so do not insert your real
        information.
      </h3>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 50,
          flexWrap: "wrap",
        }}
      >
        {Object.keys(value).map((ele) => (
          <Input
            placeholder={ele}
            value={value[ele]}
            onChange={(e) =>
              setValue((value) => {
                return { ...value, [ele]: e.target.value };
              })
            }
          />
        ))}

        <ContentBtn
          style={{
            margin: "auto",
            fontWeight: 700,
            padding: "20px 150px",
            fontSize: 50,
            height: "auto",
          }}
          color="#ffc233"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleHover(0)}
          ref={formRef}
          onClick={() =>
            alert(
              "Name：" +
                value.Name +
                "\nEmail：" +
                value.Email +
                "\nAddress：" +
                value.Address
            )
          }
        >
          Send
          <Card deg={hover ? 0 : -4} style={{ border: `1px solid #ffc233` }} />
          <Card deg={hover ? 0 : 4} style={{ border: `1px solid #ffc233` }} />
        </ContentBtn>
      </form>
    </Folder>
  );
}
