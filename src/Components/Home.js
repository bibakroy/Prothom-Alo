import React, { useEffect, useState } from "react";
import styles from "../Styles/Home.module.scss";
import prothomAlo from "../assets/images/prothomAlo.svg";
import adOne from "../assets/images/adOne.gif";
import adTwo from "../assets/images/adTwo.gif";
import Navbar from "./Navbar";
import news from "../assets/data/news.json";
import TextNews from "./TextNews";
import SelectedNewsFirstCol from "./SelectedNewsFirstCol";
import SelectedNewsSecondCol from "./SelectedNewsSecondCol";

function Home() {
  const [display, setDisplay] = useState("latest");
  const [displayNews, setDisplayNews] = useState();
  const [selectedNews, setSelectedNews] = useState();

  useEffect(() => {
    Object.entries(news).forEach(([key, value]) => {
      if (key === display) {
        setDisplayNews(value.items);
        console.log(value.items);
      }
    });
  }, [display]);

  useEffect(() => {
    Object.entries(news).forEach(([key, value]) => {
      if (key === "selected") {
        setSelectedNews(value.items);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={prothomAlo} alt="prothom-alo" />
      </div>
      <div className={styles.column}>
        <div className={styles.columnOne}>
          <Navbar display={display} setDisplay={setDisplay} />
          <TextNews displayNews={displayNews} />
          <div className={`${styles.adOne} ${styles.mobile}`}>
            <p>বিজ্ঞাপন</p>
            <div className={styles.adOneCover}>
              <img src={adOne} alt="adOne" />
            </div>
          </div>
        </div>

        <div className={styles.columnTwo}>
          <div className={styles.selectedNewsFirstCol}>
            <SelectedNewsFirstCol selectedNews={selectedNews} />
          </div>

          <div className={styles.selectedNewsSecondCol}>
            <div className={`${styles.adOne} ${styles.desktop}`}>
              <p>বিজ্ঞাপন</p>
              <div className={styles.adOneCover}>
                <img src={adOne} alt="adOne" />
              </div>
            </div>
            <SelectedNewsSecondCol selectedNews={selectedNews} />
          </div>
        </div>
      </div>
      <div className={styles.adTwo}>
        <img src={adTwo} alt="adTwo" />
      </div>
    </div>
  );
}

export default Home;
