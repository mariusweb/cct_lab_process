import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./subCategory.module.css";

const SubCategory = ({ subCategory }) => {
  let regexp = /careers@cornenrcasetech.com/;
  return (
    <li className={styles.li}>
      <FontAwesomeIcon
        className={styles.icon}
        icon={["far", "check-circle"]}
        color="#00adaa"
      />
      {regexp.test(subCategory) ? (
        <p>
          Sent link with information to{" "}
          <span className="link">careers@cornenrcasetech.com</span>
        </p>
      ) : (
        <p>{subCategory}</p>
      )}
    </li>
  );
};

export default SubCategory;
