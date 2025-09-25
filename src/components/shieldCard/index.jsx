"use client";
import styles from "./shieldCard.module.css";
import Image from "next/image";


export default function ShieldCard({ escudos }) {
  return (
      <div className={styles.escudosContainer}>
        {escudos.map((e, i) => (
          <div className={styles.escudoCard} key={i} tabIndex={0}>
            <Image
              src={e.img}
              width={80}
              height={80}
              alt={`Escudo Corinthians ${e.ano}`}
              className={styles.escudoImg}
              loading="lazy"
            />
            <div className={styles.escudoAno}>{e.ano}</div>
            <div className={styles.escudoText}>{e.text}</div>
          </div>
        ))}
      </div>
  );
}
