import styles from "./page.module.css";
import { Carousel } from "antd";
import Image from "next/image";

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
            Mais de 114 anos de muita história e tradição do time do povo em um
            só lugar!
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

      <section className={styles.atrativeSection}>
        <div className={styles.bannerContainer}>
          <Image className={styles.bannerImage}
            src="/images/banner.png"
            alt="Banner"
            layout="fill"
            objectFit="cover"
          />

          <h2 className={styles.bannerText}>TUDO DO ULTIMO BRASILEIRO A CONQUISTAR O MUNDO!</h2>
        </div>
      </section>

      <section className={styles.navigationSection}>
        <div className={styles.navigationSectionTitle}>
          <h2>Conheça mais do time do povo</h2>
          <p>Descubra tudo sobre o Timão</p>
        </div>

        <div className={styles.navigationSectionContent}>
          <div className={styles.navigationCarousel}>
            <Carousel arrows infinite={false} className={styles.carousel}>
              <div>
                <div className={styles.contentCarousel}>
                  <Image />
                <h2>Conheça a casa da fiel!</h2>


                </div>
              </div>
              <div>
                <h3 className={styles.contentCarousel}>2</h3>
              </div>
              <div>
                <h3 className={styles.contentCarousel}>3</h3>
              </div>
              <div>
                <h3 className={styles.contentCarousel}>4</h3>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
