import React, { useState, useEffect } from "react";
import styles from "../Styles/SelectedNewsColOne.module.scss";

function SelectedNewsColOne({ selectedNews }) {
  const [sortedSelectedNews, setSortedSelectedNews] = useState();
  console.log({ sortedSelectedNews });

  useEffect(() => {
    if (selectedNews) {
      setSortedSelectedNews(selectedNews.sort((a, b) => a.sort - b.sort));
    }
  }, [selectedNews]);

  return (
    <>
      {sortedSelectedNews && (
        <div className={styles.container}>
          <h2>নির্বাচিত</h2>
          {sortedSelectedNews.slice(0, 1).map((item, index) => {
            return (
              <div
                key={index}
                className={styles.coverNews}
                style={{
                  backgroundImage: `url(${item.thumb})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  // backgroundRepeat: "no-repeat",
                }}
              >
                hello
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default SelectedNewsColOne;
