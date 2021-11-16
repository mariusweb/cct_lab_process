import React from "react";
import SubCategory from "./SubCategory";

const SubCategoryList = ({ subCategories }) => {
  return (
    <ul>
      {subCategories.map((sub, index) => {
        return <SubCategory subCategory={sub} key={index + 1} />;
      })}
    </ul>
  );
};

export default SubCategoryList;
