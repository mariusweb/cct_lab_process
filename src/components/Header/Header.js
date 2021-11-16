import React from "react";
import { Container } from "react-bootstrap";
import styles from "./header.module.css";

export default function Header(props) {
  const { title } = props;
  return (
    <Container>
      <h1 className={styles.header}>{title}</h1>
    </Container>
  );
}
