import React, { useState, useEffect } from "react";
import styles from "../Styles/SelectedNewsFirstCol.module.scss";

function SelectedNewsFirstCol({ selectedNews }) {
  const [sortedSelectedNews, setSortedSelectedNews] = useState();

  useEffect(() => {
    if (selectedNews) {
      setSortedSelectedNews(selectedNews.sort((a, b) => a.sort - b.sort));
    }
  }, [selectedNews]);

  return (
    <>
      {sortedSelectedNews && (
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <div className={styles.header}>
              <div className={styles.circle}></div>
              <h2>নির্বাচিত</h2>
            </div>
            {sortedSelectedNews.slice(0, 1).map((item, index) => {
              return (
                <div key={index} className={styles.coverNews}>
                  <a href={`newsDetails/${item.id}`}>
                    <img src={item.thumb} alt={item.thumb} />
                    <h2>
                      <span>{item.subheadline ? item.subheadline : ""}</span>
                      {item.subheadline ? " / " : ""}
                      {item.headline}
                    </h2>
                  </a>
                </div>
              );
            })}
            <div className={styles.coverNewsRow}>
              {sortedSelectedNews.slice(1, 3).map((item, index) => {
                return (
                  <div key={index} className={styles.coverAndHeading}>
                    <a href={`newsDetails/${item.id}`}>
                      <img src={item.thumb} alt={item.thumb} />
                      <h2>
                        <span>{item.subheadline ? item.subheadline : ""}</span>
                        {item.subheadline ? " / " : ""}
                        {item.headline}
                      </h2>
                      <p>১৬ ঘণ্টা আগে</p>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SelectedNewsFirstCol;
