import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header/Header";
import styles from "./page.module.css";

const Page = ({ content, title }) => {
  return (
    <Container
      fluid
      className={
        ("content", "d-flex", "flex-column", "min-vh-100", styles.container)
      }
    >
      <Header title={title} />
      {content()}
    </Container>
  );
};

export default Page;
