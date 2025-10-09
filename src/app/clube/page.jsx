"use client";

import styles from "./clube.module.css";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "antd";
import React, { useRef, useState } from "react";

export default function Clube() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 700;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  const torcidaImages = [
    {
      src: "/images/clubePage/torcida1.png",
      alt: "Mosaico",
      title: "Mosaico na Neo Química Arena ",
      description: "Mosaíco no Derby Paulista",
    },
    {
      src: "/images/clubePage/torcida2.png",
      alt: "Fiel torcida na Arena",
      title: "Torcida zona Norte",
      description: "Organizada em festa",
    },
    {
      src: "/images/clubePage/torcida3.png",
      alt: "Gaviões da Fiel",
      title: "Gaviões da Fiel na Libertadores 2012",
      description: "Apoio incondicional na conquista da América",
    },
    {
      src: "/images/clubePage/torcida4.png",
      alt: "Invasão no Maracanã",
      title: "Invasão histórica",
      description: "A Fiel lotando o Maracanã",
    },
    {
      src: "/images/clubePage/torcida5.png",
      alt: "Mundial 2012",
      title: "Mundial 2012 invasão no aeroporto",
      description: "O apoio da Fiel para os campeões do mundo",
    },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const audioRef = useRef(null);

  const toggleHino = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const openLyricsModal = () => setShowLyrics(true);
  const closeLyricsModal = () => setShowLyrics(false);

  const hinoLetra = `
  Salve o Corinthians
  O campeão dos campeões
  Eternamente
  Dentro dos nossos corações

  Salve o Corinthians
  De tradições e glórias mil
  Tu és orgulho
  Dos desportistas do Brasil

  Teu passado é uma bandeira
  Teu presente é uma lição
  Figuras entre os primeiros
  Do nosso esporte bretão

  Corinthians grande
  Sempre altaneiro
  És do Brasil
  O clube mais brasileiro

  Salve o Corinthians
  O campeão dos campeões
  Eternamente
  Dentro dos nossos corações

  Salve o Corinthians
  De tradições e glórias mil
  Tu és orgulho
  Dos desportistas do Brasil`;

  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.title}> A instituição Sport Club Corinthians Paulista</h1>
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
              src="/images/clubePage/escudo.png"
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
                  target="_blank" href="https://www.nike.com.br/camisa-nike-corinthians-i-2025-26-jogador-masculina-059012.html?cor=51"
                  className={styles.buyButton}
                >
                  COMPRAR UNIFORME TITULAR
                </Link>
                <Link
                  target="_blank" href="https://www.nike.com.br/camisa-nike-corinthians-ii-2025-26-jogador-masculina-058830.html?cor=ID"
                  className={styles.buyButton}
                >
                  COMPRAR UNIFORME RESERVA
                </Link>
                <Link
                  target="_blank" href="https://www.nike.com.br/camisa-corinthians-nike-total-90-iii-2025-26-jogador-masculina-059619.html?cor=ID"
                  className={styles.buyButton}
                >
                  COMPRAR TERCEIRO UNIFORME
                </Link>
                <Link
                  target="_blank" href="https://www.nike.com.br/camisa-de-goleiro-nike-corinthians-2025-26-torcedor-pro-masculina-058813.html?cor=ID&utm_source=google&utm_medium=cpc&utm_campaign=Google_PLA_Vestu%C3%A1rio_Geral&gad_source=1&gad_campaignid=22900875082&gbraid=0AAAAADob9lODEKSp_XYfwty735XYL7QSK&gclid=CjwKCAjwi4PHBhA-EiwAnjTHudKeAg0sd_b5azclWEdYIwuTGx0FDzGk-uUSsoWzpT_Uq7WZl7-e6BoCkkAQAvD_BwE&utm_referrer=https://www.google.com/"
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
                      src="/images/clubePage/uniforme1.png"
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
                      src="/images/clubePage/uniforme2.png"
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
                      src="/images/clubePage/uniforme4.png"
                      alt="Uniforme Corinthians - Terceiro"
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
                      src="/images/clubePage/uniforme3.png"
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
                  src="/images/clubePage/arena1.png"
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
                  src="/images/clubePage/arena2.png"
                  alt="Neo Química Arena  - Vista externa"
                  className={styles.carouselImage}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div>
              <div className={styles.contentCarousel}>
                <Image
                  src="/images/clubePage/arena3.png"
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
                  src="/images/clubePage/arena4.png"
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
                  src="/images/clubePage/arena5.png"
                  alt="Neo Química Arena - Abertura copa do mundo 2014"
                  className={styles.carouselImage}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div>
              <div className={styles.contentCarousel}>
                <Image
                  src="/images/clubePage/arena6.png"
                  alt="Neo Química Arena - NFL"
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
            <div className={styles.stadiumLocation}>
              <button
                className={styles.stadiumMapButton}
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=Neo+Química+Arena+Corinthians+Itaquera+São+Paulo",
                    "_blank"
                  )
                }
              >
                📍 Ver Localização no Mapa
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.supportesSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>A Fiel Torcida</h2>
            <p className={styles.subtitle}>
              A maior e mais apaixonada torcida do Brasil
            </p>
          </div>

          <div className={styles.galleryWrapper}>
            <button
              className={`${styles.scrollButton} ${styles.leftButton} ${!canScrollLeft ? styles.disabled : ""
                }`}
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className={styles.scrollContainer}
              ref={scrollContainerRef}
              onScroll={handleScroll}
            >
              {torcidaImages.map((image, index) => (
                <div key={index} className={styles.imageCard}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className={styles.image}
                      width={800}
                      height={600}
                      quality={90}
                    />
                    <div className={styles.overlay}>
                      <div className={styles.overlayContent}>
                        <h3 className={styles.imageTitle}>{image.title}</h3>
                        <p className={styles.imageDescription}>
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className={`${styles.scrollButton} ${styles.rightButton} ${!canScrollRight ? styles.disabled : ""
                }`}
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className={styles.scrollIndicator}>
            <span>Arraste ou use as setas para ver mais</span>
          </div>

          <div className={styles.supportersInfo}>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h3>Torcedores</h3>
                <p>30+ milhões no mundo</p>
              </div>
              <div className={styles.infoItem}>
                <h3>Fundada</h3>
                <p>1 de setembro de 1910</p>
              </div>
              <div className={styles.infoItem}>
                <h3>Presença</h3>
                <p>Todos os estados do Brasil</p>
              </div>
              <div className={styles.infoItem}>
                <h3>Democracia Corinthiana</h3>
                <p>Movimento histórico dos anos 80</p>
              </div>
            </div>
            <div className={styles.supportersDescription}>
              <p>
                A Fiel Torcida transcende o futebol. É um movimento social, uma
                família que se estende por todo o Brasil e pelo mundo. Conhecida
                pela paixão incondicional, lealdade e apoio em todos os
                momentos, a Fiel é reconhecida como uma das torcidas mais
                apaixonadas e organizadas do mundo. Do Parque São Jorge à Neo
                Química Arena, a força da torcida é o combustível que move o
                Timão.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.mascotSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.bannerText}>MASCOTE DO CLUBE POVO</h2>
          <p className={styles.subtitle}>Mosqueteiro que representa a fiel</p>
        </div>
        <div className={styles.mascoteContainer}>
          <div className={styles.mascoteImageWrapper}>
            <Image
              src="/images/clubePage/mosqueteiro.png"
              alt="Mosqueteiro - Mascote do Corinthians"
              width={300}
              height={400}
              className={styles.mascoteImage}
            />
          </div>

          <div className={styles.mascoteTextContent}>
            <p className={styles.mascoteText}>
              O mascote oficial do Corinthians, o Mosqueteiro, tem sua origem mais aceita e oficial em 1929.
              Naquele ano, o Corinthians conquistou sua primeira vitória internacional em um amistoso contra o
              Barracas, da Argentina, vencendo por 3 a 1 no Parque São Jorge. Após essa partida, o jornalista
              Thomaz Mazzoni, do jornal "A Gazeta", escreveu uma crônica elogiando a "fibra de mosqueteiro" dos
              jogadores corintianos, destacando a garra, a determinação e a força que o time demonstrou em campo.
              Esse reconhecimento foi tão marcante que o personagem D'Artagnan, dos "Três Mosqueteiros" de
              Alexandre Dumas, passou a ser associado ao Corinthians, tornando-se símbolo de coragem e luta do
              clube. Assim, o Mosqueteiro representa oficialmente o espírito de resistência e bravura do
              Corinthians desde essa importante vitória em 1929.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.centersSection}>
        <div className={styles.centersContainer}>
          <div className={styles.centersHeader}>
            <h2 className={styles.bannerText}>CENTROS DE EXCELÊNCIA</h2>
            <p className={styles.subtitle}>
              Tradição e modernidade do Corinthians
            </p>
          </div>

          <div className={styles.centersContent}>
            <div className={styles.centerCard}>
              <div className={styles.centerImage}>
                <Image
                  src="/images/clubePage/pqsaojorge.png"
                  alt="Parque São Jorge"
                  className={styles.centerImg}
                  width={600}
                  height={400}
                  quality={90}
                  objectFit="cover"
                />
              </div>
              <div className={styles.centerInfo}>
                <h3 className={styles.centerTitle}>Parque São Jorge</h3>
                <p className={styles.centerSubtitle}>
                  Berço da história e tradição corinthiana
                </p>
                <p className={styles.centerDescription}>
                  O Parque São Jorge é a casa histórica do Corinthians, um
                  complexo esportivo que abriga a sede administrativa, o ginásio
                  poliesportivo, e espaços para as categorias de base. Conhecido
                  como "Templo do Corinthians", é um local de grande importância
                  para a cultura e a identidade do clube, onde nascem gerações
                  de jogadores e a paixão da Fiel Torcida tem suas raízes.
                </p>
                <div className={styles.centerAddress}>
                  <span className={styles.addressText}>
                    Rua São Jorge, 777 - Tatuapé, São Paulo - SP
                  </span>
                  <button
                    className={styles.mapButton}
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/?q=Parque+São+Jorge+Corinthians+Tatuapé+São+Paulo",
                        "_blank"
                      )
                    }
                  >
                    📍 Ver no Mapa
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.centerCard}>
              <div className={styles.centerImage}>
                <Image
                  src="/images/clubePage/ct.png"
                  alt="Centro de Treinamento Dr. Joaquim Grava"
                  className={styles.centerImg}
                  width={600}
                  height={400}
                  quality={90}
                  objectFit="cover"
                />
              </div>
              <div className={styles.centerInfo}>
                <h3 className={styles.centerTitle}>
                  Centro de Treinamento Dr. Joaquim Grava
                </h3>
                <p className={styles.centerSubtitle}>
                  O coração da preparação profissional
                </p>
                <p className={styles.centerDescription}>
                  O CT Joaquim Grava é o moderno centro de excelência do
                  Corinthians, inaugurado em 2010 e localizado na zona leste de
                  São Paulo. Com infraestrutura completa, incluindo campos
                  oficiais, hotel, restaurante, academia, e sala de recuperação,
                  é onde a equipe profissional treina e se prepara para os
                  desafios do futebol. O centro também passa por constantes
                  melhorias para garantir conforto e tecnologia de ponta aos
                  atletas.
                </p>
                <div className={styles.centerAddress}>
                  <span className={styles.addressText}>
                    Av. Miguel Ignácio Curi, 111 - Itaquera, São Paulo - SP
                  </span>
                  <button
                    className={styles.mapButton}
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/?q=CT+Joaquim+Grava+Corinthians+Itaquera+São+Paulo",
                        "_blank"
                      )
                    }
                  >
                    📍 Ver no Mapa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.anthemSection}>
        <div className={styles.anthemHeader}>
          <h2 className={styles.bannerText}>Hino do Timão</h2>
          <p className={styles.subtitle}>Salve o Corinthians!</p>
        </div>

        <div className={styles.anthemContent}>
          <audio ref={audioRef} src="/songs/hino-corinthians.mp3" />
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button onClick={toggleHino} className={styles.anthemButton}>
              {isPlaying ? "❚❚  Pausar Hino" : "▶  Tocar Hino"}
            </button>
            <button
              onClick={openLyricsModal}
              className={styles.anthemButton}
              style={{ background: "var(--cinza-escuro)" }}
            >
              💬 Ver Letra
            </button>
          </div>
        </div>

        {showLyrics && (
          <div className={styles.lyricsModalOverlay} onClick={closeLyricsModal}>
            <div
              className={styles.lyricsModal}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeModalButton}
                onClick={closeLyricsModal}
              >
                &times;
              </button>
              <h3 className={styles.lyricsTitle}>Letra do Hino</h3>
              <pre className={styles.lyricsText}>{hinoLetra}</pre>
            </div>
          </div>
        )}
      </section>

      <section className={styles.historyBannerSection}>
        <div className={styles.historyBanner}>
          <div className={styles.bannerContainer}>
            <Image
              className={styles.bannerImage}
              src="/images/clubePage/banner2.png"
              alt="Banner"
              layout="fill"
              objectFit="cover"
              quality={100}
            />

            <h2 className={styles.bannerText2}>CONHEÇA A HISTÓRIA DO TIMÃO</h2>

            <Link href="/historia">
              <button className={styles.historyButton}>Saiba Mais</button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
