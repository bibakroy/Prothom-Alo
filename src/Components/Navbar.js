import React from "react";
import styles from "../Styles/Navbar.module.scss";
import prothomAlo from "../assets/images/prothomAlo.svg";

function Navbar() {
  return (
    <div className={styles.logo}>
      <img src={prothomAlo} alt="prothom-alo" />
    </div>
  );
}

export default Navbar;
