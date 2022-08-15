import React, { useEffect, useState } from "react";
import styles from "../Styles/Home.module.scss";
import prothomAlo from "../assets/images/prothomAlo.svg";
import adOne from "../assets/images/adOne.gif";
import Navbar from "./Navbar";
import news from "../assets/data/news.json";
import TextNews from "./TextNews";
import SelectedNewsColOne from "./SelectedNewsColOne";

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
          <div className={styles.adOne}>
            <p>বিজ্ঞাপন</p>
            {/* <div className={styles.adOneCover}> */}
            <img src={adOne} alt="adOne" />
            {/* </div> */}
          </div>
        </div>

        <div className={styles.columnTwo}>
          <SelectedNewsColOne selectedNews={selectedNews} />
        </div>

        {/* <div className={styles.columnThree}>3</div> */}
      </div>
    </div>
  );
}

export default Home;
