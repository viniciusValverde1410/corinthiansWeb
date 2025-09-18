import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <section className={styles.heroSection}>
        <div className={styles["blur-layer-1"]}></div>
        <div className={styles["blur-layer-2"]}></div>
        <div className={styles.containerHero}>
          <h1 className={styles.heroTitle}>
            Sport Club{" "}
            <span className={styles.heroTitleHighlight}>Corinthians</span>{" "}
            Paulista
          </h1>
          <p className={styles.heroSubtitle}>
            Mais de 114 anos de muita história e tradição do time do povo em um só lugar!
          </p>
          <div className={styles.heroButtons}>
            <a href="/historia" className={styles.heroButton}>
              📖 História
            </a>
            <a
              href="/titulos"
              className={`${styles.heroButton} ${styles.heroButtonWhite}`}
            >
              🏆 Títulos
            </a>
            <a href="/jogadores" className={styles.heroButton}>
              👥 Jogadores
            </a>
          </div>
        </div>
      </section>

      <section className={styles.navigationSection}>
        <div className={styles.navigationSectionTitle}>
          <h2>Conheça o Maior Clube do Brasil</h2>
          <p>Descubra tudo sobre o Timão</p>
        </div>
      </section>
    </div>
  );
}
