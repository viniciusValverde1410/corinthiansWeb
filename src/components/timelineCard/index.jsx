"use client";
import styles from "./timelineCard.module.css";
import Image from "next/image";


export default function TimelineCard({ timelineData }) {
  return (
    <div className={styles.timelineContainer}>
      {timelineData.map((item, index) => (
        <div className={styles.timelineCard} key={index} tabIndex={0}>
          <div className={styles.timelineYear}>{item.year}</div>
          <div className={styles.timelineContent}>
            <div className={styles.timelineTitleCard}>{item.title}</div>
            <div className={styles.timelineText}>{item.text}</div>
          </div>
          <div className={styles.timelineImageWrapper}>
            <Image
              src={item.image}
              alt={item.imageAlt}
              width={220}
              height={160}
              className={styles.timelineImage}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
