import styles from "./clube.module.css";
import Image from "next/image";
import { Carousel } from "antd";

export default function Clube() {
  return (
    <div>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>Sport Club Corinthians Paulista</h1>
            <p className={styles.institutionalText}>
              Uma paixão que une gerações. O Corinthians é democracia, é
              resistência, é o time do povo brasileiro. Ser corinthiano é
              carregar no peito uma chama que nunca se apaga. É vibrar com cada
              gol, sofrer com cada lance, e nunca deixar de acreditar. O Timão é
              família, é casa, é amor eterno e incondicional.
            </p>
          </div>
          <div className={styles.imageContent}>
            <Image
              src="/images/escudo.png"
              alt="Escudo do Corinthians"
              className={styles.escudo}
              width={180}
              height={180}
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.stadiumSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.bannerText}>NEO QUÍMICA ARENA</h2>
          <p className={styles.subtitle}>Casa da Fiel Torcida</p>
        </div>
        <div className={styles.stadiumCarousel}>
          <Carousel
            autoplay={true}
            arrows
            infinite={true}
            className={styles.carousel}
          >
            <div>
              <div className={styles.contentCarousel}>
                <Image
                  src="/images/arena1.png"
                  alt="Neo Química Arena - Casa cheia"
                  className={styles.carouselImage}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div>
              <div className={styles.contentCarousel}>
                <Image
                  src="/images/arena2.png"
                  alt="Neo Química Arena - Vista externa"
                  className={styles.carouselImage}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div>
              <div className={styles.contentCarousel}>
                <Image
                  src="/images/arena3.png"
                  alt="Neo Química Arena - Campo"
                  className={styles.carouselImage}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div>
              <div className={styles.contentCarousel}>
                <Image
                  src="/images/arena4.png"
                  alt="Neo Química Arena - Fachada"
                  className={styles.carouselImage}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div>
              <div className={styles.contentCarousel}>
                <Image
                  src="/images/arena5.png"
                  alt="Neo Química Arena - Abertura copa do mundo 2014"
                  className={styles.carouselImage}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </Carousel>
        </div>{" "}
        <div className={styles.stadiumInfo}>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <h3>Capacidade</h3>
              <p>49.205 torcedores</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Inauguração</h3>
              <p>18 de maio de 2014</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Localização</h3>
              <p>Itaquera, São Paulo - SP</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Área Total</h3>
              <p>210.000 m²</p>
            </div>
          </div>
          <div className={styles.stadiumDescription}>
            <p>
              Casa do Sport Club Corinthians Paulista e palco da abertura da
              Copa do Mundo FIFA de 2014. Uma das arenas mais modernas e
              tecnológicas do Brasil. Recebe grandes eventos esportivos, shows
              internacionais e até jogos da NFL.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
