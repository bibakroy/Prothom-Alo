import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import styles from "../Styles/NewsDetails.module.scss";
import Navbar from "./Navbar";
import news from "../assets/data/news.json";

function NewsDetails() {
  const [displayNews, setDisplayNews] = useState();
  const [displayNewsDescription, setDisplayNewsDescription] = useState();

  const params = useParams();
  const newsId = Number(params.newsId);

  let parser = useMemo(() => new DOMParser(), []);

  useEffect(() => {
    Object.entries(news).forEach(([key, value]) => {
      value["items"].map((item) => {
        if (item.id === newsId) {
          setDisplayNews(item);
          const pTagsParsed = parser.parseFromString(
            item.descriptions,
            "text/html"
          );
          const pTags = pTagsParsed.querySelectorAll("p");
          const pTagsArray = [...pTags];
          const textArray = pTagsArray.map((pTag) => pTag.textContent);
          setDisplayNewsDescription(textArray);
        }
        return null;
      });
    });
  }, [newsId, parser]);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.innerContainer}>
        {!newsId || !displayNews ? (
          <div className={styles.noNews}>দুঃখিত, কোন সংবাদ পাওয়া যায়নি</div>
        ) : (
          <>
            <div className={styles.heading}>
              <h3>{displayNews.subheadline}</h3>
              <h1>{displayNews.headline}</h1>
            </div>
            <div className={styles.cover}>
              <img
                src={displayNews["cover-photo"] || displayNews["thumb"]}
                alt={displayNews["cover-photo"]}
              />
            </div>
            <div className={styles.description}>
              {displayNewsDescription.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NewsDetails;
