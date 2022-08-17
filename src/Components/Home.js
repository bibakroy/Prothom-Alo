import React, { useEffect, useState } from "react";
import styles from "../Styles/Home.module.scss";
import adOne from "../assets/images/adOne.gif";
import adTwo from "../assets/images/adTwo.gif";
import NewsMenu from "./NewsMenu";
import news from "../assets/data/news.json";
import TextNews from "./TextNews";
import SelectedNewsFirstCol from "./SelectedNewsFirstCol";
import SelectedNewsSecondCol from "./SelectedNewsSecondCol";
import Navbar from "./Navbar";

function Home() {
  const [display, setDisplay] = useState("latest");
  const [displayNews, setDisplayNews] = useState();
  const [selectedNews, setSelectedNews] = useState();

  useEffect(() => {
    Object.entries(news).forEach(([key, value]) => {
      if (key === display) {
        setDisplayNews(value.items);
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
      <Navbar />
      <div className={styles.column}>
        <div className={styles.columnOne}>
          <NewsMenu display={display} setDisplay={setDisplay} />
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
        <div className={styles.adTwoCover}>
          <p>বিজ্ঞাপন</p>
          <img src={adTwo} alt="adTwo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
