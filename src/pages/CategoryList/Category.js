import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import Customtoggle from "../../components/CustomToggle/CustomToggle";
import SubCategoryList from "../SubCategoryList/SubCategoryList";
import styles from "./category.module.css";

const Category = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <li>
      <Card className={styles.card}>
        <Card.Header className={styles.cardHeader}>
          <Customtoggle
            title={data.name}
            eventKey={data.step}
            toggle={toggle}
            setToggle={setToggle}
          />
        </Card.Header>
        <Accordion.Collapse eventKey={data.step}>
          <Card.Body>
            <SubCategoryList subCategories={data.subCategory} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </li>
  );
};

export default Category;
