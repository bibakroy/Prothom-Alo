import React from "react";
import styles from "../Styles/TextNews.module.scss";

function TextNews({ displayNews }) {
  return (
    <>
      {displayNews && (
        <div className={styles.container}>
          {displayNews
            .sort((a, b) => a.sort - b.sort)
            .map((item, index) => {
              return (
                <div key={index} className={styles.singleNews}>
                  <p className={styles.newsCount}>
                    {(index + 1).toLocaleString("bn")}
                  </p>
                  <h2>
                    <span style={{ color: "red" }}>
                      {item.subheadline ? item.subheadline : ""}
                    </span>
                    {item.subheadline ? " / " : ""}
                    {item.headline}
                  </h2>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}

export default TextNews;
