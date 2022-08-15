import React from "react";
import styles from "../Styles/Navbar.module.scss";

function Home({ display, setDisplay }) {
  return (
    <div className={styles.navbar}>
      <p
        className={display === "latest" ? `${styles.display}` : ""}
        onClick={() => {
          setDisplay("latest");
        }}
      >
        সর্বশেষ
      </p>
      <p
        className={display === "mostread" ? `${styles.display}` : ""}
        onClick={() => {
          setDisplay("mostread");
        }}
      >
        পঠিত
      </p>
      <p
        className={display === "discussed" ? `${styles.display}` : ""}
        onClick={() => {
          setDisplay("discussed");
        }}
      >
        আলোচিত
      </p>
    </div>
  );
}

export default Home;
