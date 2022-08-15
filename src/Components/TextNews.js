import React from "react";
import styles from "../Styles/TextNews.module.scss";

function TextNews({ displayNews }) {
  return (
    <>
      {displayNews && (
        <>
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
        </>
      )}
    </>
  );
}

export default TextNews;
