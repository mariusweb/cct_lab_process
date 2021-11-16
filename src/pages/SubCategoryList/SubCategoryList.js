import React from "react";
import SubCategory from "./SubCategory";
import styles from "./subCategoryList.module.css";

const SubCategoryList = ({ subCategories }) => {
  return (
    <ul className={styles.ul}>
      {subCategories.map((sub, index) => {
        return <SubCategory subCategory={sub} key={index + 1} />;
      })}
    </ul>
  );
};

export default SubCategoryList;
