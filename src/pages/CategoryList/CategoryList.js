import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { useCategoryContext } from "../../context/CategoryContext";
import Category from "./Category";
import styles from "./categoryList.module.css";

export default function CategoryList() {
  const { CategoryListData } = useCategoryContext();

  return (
    <div>
      <ul className={styles.ul}>
        <Container>
          <Accordion>
            {CategoryListData.map((data) => {
              return <Category data={data} key={data.step} />;
            })}
          </Accordion>
        </Container>
      </ul>
    </div>
  );
}
