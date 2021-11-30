import { useState, useRef } from "react";
import { Body, Ticker, WrappedContent, H4 } from "./styled";
import Contact from "./Contact";
import Form from "./From";

export default function Footer() {
  const [contact, setContact] = useState(0);
  const [form, setForm] = useState(0);
  const formRef = useRef(null);
  const End = useRef(null);
  const scrollToBottom = () => {
    setTimeout(() => End.current.scrollIntoView({ behavior: "smooth" }), 400);
  };
  const scrollToForm = () => {
    setTimeout(
      () => formRef.current.scrollIntoView({ behavior: "smooth" }),
      400
    );
  };
  const formfolding = () => {
    if (contact) {
      setContact(0);
    }
    if (!form) {
      scrollToForm();
    }
    setForm((form) => +!form);
  };
  const contactfolding = () => {
    if (form) {
      setForm(0);
    }
    if (!contact) {
      scrollToBottom();
    }
    setContact((contact) => +!contact);
  };
  return (
    <>
      <Body form={form} style={{ maxHeight: form ? 1000 : 80 }}>
        <Ticker onClick={formfolding} bottom={0}>
          <WrappedContent times={8} animationTime={10}>
            <H4>Request for cats' news</H4>
          </WrappedContent>
        </Ticker>
        <Form form={form} formRef={formRef} />
      </Body>
      <Body contact={contact} style={{ maxHeight: contact ? 1000 : 80 }}>
        <Ticker onClick={contactfolding} bottom={0}>
          <WrappedContent times={8} animationTime={4}>
            <H4>Contact</H4>
          </WrappedContent>
        </Ticker>
        <Contact contact={contact} End={End} formfolding={formfolding} />
      </Body>
    </>
  );
}
