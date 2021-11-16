import React from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import styles from "./customToggle.module.css";

const Customtoggle = ({ eventKey, title, setToggle }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <div onClick={decoratedOnClick} className={styles.customDiv}>
      <h4 className={styles.title}>
        <span className={styles.span}>{eventKey}</span>
        {title}
      </h4>
    </div>
  );
};

export default Customtoggle;
