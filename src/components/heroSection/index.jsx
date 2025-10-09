import styles from "./heroSection.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ titulo, descricao, imagem }) {
    return (
              <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>{titulo}</h1>
            <p className={styles.institutionalText}>
                {descricao}
            </p>
          </div>
          <div className={styles.imageContent}>
            <Image
              src={imagem}
              alt="Escudo do Corinthians"
              className={styles.escudo}
              width={180}
              height={180}
              priority
            />
          </div>
        </div>
      </section>
    )
}