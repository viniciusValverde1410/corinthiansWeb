import styles from "./clube.module.css";
import Image from "next/image";
import Link from "next/link";
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

      <section className={styles.uniformsSection}>
        <div className={styles.uniformsContainer}>
          <div className={styles.uniformsContent}>
            <div className={styles.uniformsTextSide}>
              <h2 className={styles.bannerText}>MANTO SAGRADO</h2>
              <p className={styles.subtitle}>Tradição que representa a Fiel</p>
              <p className={styles.uniformsDescription}>
                Mais que um uniforme, é o símbolo da Fiel Torcida. O manto
                alvinegro carrega a alma do bando de loucos, representa a luta,
                a garra e a paixão incondicional dos corinthianos. A atual
                camisa especial homenageia o histórico Mundial de Clubes de
                2000, o primeiro mundial do Timão, quando conquistou o mundo e
                eternizou seu nome na história do futebol.
              </p>
              <div className={styles.buyButtonsContainer}>
                <Link
                  href="/loja/uniforme-titular"
                  className={styles.buyButton}
                >
                  COMPRAR UNIFORME TITULAR
                </Link>
                <Link
                  href="/loja/uniforme-reserva"
                  className={styles.buyButton}
                >
                  COMPRAR UNIFORME RESERVA
                </Link>
                <Link
                  href="/loja/uniforme-goleiro"
                  className={styles.buyButton}
                >
                  COMPRAR UNIFORME GOLEIRO
                </Link>
              </div>
            </div>
            <div className={styles.uniformsCarouselSide}>
              <Carousel
                autoplay={true}
                arrows
                infinite={true}
                className={styles.uniformsCarousel}
              >
                <div>
                  <div className={styles.uniformSlide}>
                    <Image
                      src="/images/uniforme1.png"
                      alt="Uniforme Corinthians - Titular"
                      className={styles.uniformImage}
                      width={600}
                      height={750}
                      quality={100}
                      priority
                    />
                  </div>
                </div>
                <div>
                  <div className={styles.uniformSlide}>
                    <Image
                      src="/images/uniforme2.png"
                      alt="Uniforme Corinthians - Reserva"
                      className={styles.uniformImage}
                      width={600}
                      height={750}
                      quality={100}
                      priority
                    />
                  </div>
                </div>
                <div>
                  <div className={styles.uniformSlide}>
                    <Image
                      src="/images/uniforme3.png"
                      alt="Uniforme Corinthians - Goleiro"
                      className={styles.uniformImage}
                      width={600}
                      height={750}
                      quality={100}
                      priority
                    />
                  </div>
                </div>
              </Carousel>
            </div>
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
