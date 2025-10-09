  "use client";
  import styles from "./rivalidadeCard.module.css";
  import Image from "next/image";


  export default function RivalidadeCard({ rivalidades }) {
    return (
      <div className={styles.rivalidadeContainer}>
          {rivalidades.map((r, i) => (
      <div className={styles.rivalidadeCard} key={i} tabIndex={0}>
        <div className={styles.rivalidadeImgWrapper}>
            <Image
              src={r.img}
              alt={r.title}
              width={60}
              height={60}
              className={styles.rivalidadeImg}
            />
        </div>
        <div className={styles.rivalidadeTitle}>{r.title}</div>
        <div className={styles.rivalidadeText}>{r.text}</div>


        <div className={styles.torcidaImgWrapper}>
            <Image
              src={r.torcidaImg}
              alt="Imagem da torcida"
              width={60}
              height={60}
              className={styles.torcidaImg}
            />
        </div>
      </div>
          ))}
      </div>


    );
  }
