import React, { useState, useEffect } from "react";
import styles from "../Styles/SelectedNewsSecondCol.module.scss";

function SelectedNewsSecondCol({ selectedNews }) {
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
            <div className={styles.coverNewsCol}>
              {sortedSelectedNews
                .slice(3, sortedSelectedNews.length)
                .map((item, index) => {
                  return (
                    <div className={styles.coverNewsColContainer} key={index}>
                      <a href={`newsDetails/${item.id}`}>
                        <div key={index} className={styles.coverAndHeading}>
                          <div className={styles.heading}>
                            <h2>
                              <span>
                                {item.subheadline ? item.subheadline : ""}
                              </span>
                              {item.subheadline ? " / " : ""}
                              {item.headline}
                            </h2>
                            <p>১৬ ঘণ্টা আগে</p>
                          </div>
                          <img src={item.thumb} alt={item.thumb} />
                        </div>
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

export default SelectedNewsSecondCol;
