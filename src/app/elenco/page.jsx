"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./elenco.module.css";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

export default function ElencoPage() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Função para converter URL do GitHub para formato raw
  const convertGitHubUrlToRaw = (url) => {
    if (!url) return "/images/player-placeholder.png";

    // Se já for uma URL raw, retorna como está
    if (url.includes("raw.githubusercontent.com")) {
      return url;
    }

    // Converte URL do GitHub para formato raw
    if (url.includes("github.com") && url.includes("/blob/")) {
      return url
        .replace("github.com", "raw.githubusercontent.com")
        .replace("/blob/", "/");
    }

    // Se for uma URL local ou absoluta válida, retorna como está
    return url;
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get("http://localhost:4000/players");

        const playersData =
          response.data.jogadores || response.data.players || [];

        setPlayers(playersData);

        if (playersData.length > 0) {
          setSelectedPlayer(playersData[0]);
        }
      } catch (err) {
        setError("Erro ao carregar os jogadores. Tente novamente mais tarde.");
        console.error("Erro ao buscar jogadores:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      const newScrollLeft =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [players]);

  if (loading) {
    return (
      <main className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Carregando elenco...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.errorContainer}>
        <h2 className={styles.errorTitle}>Ops! Algo deu errado</h2>
        <p className={styles.errorText}>{error}</p>
      </main>
    );
  }

  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.title}> Elenco atual</h1>
            <p className={styles.institutionalText}>
              Os Guerreiros do Timão, vestindo o manto sagrado, esses jogadores
              representam o verdadeiro time do povo, com raça, paixão e
              determinação. Eles carregam a força e a história do Corinthians em
              cada jogada, mostrando a garra que faz do Timão um símbolo de luta
              e orgulho para milhões de torcedores.
            </p>
          </div>
          <div className={styles.imageContent}>
            <Image
              src="/images/elenco.png"
              alt="Arte do elenco campeão paulista"
              className={styles.escudo}
              width={180}
              height={180}
              priority
            />
          </div>
        </div>
      </section>

      {selectedPlayer && (
        <section className={styles.elencoSection}>
          <div className={styles.selectedPlayerImage}>
            <Image
              src={convertGitHubUrlToRaw(selectedPlayer.imageUrl)}
              alt={selectedPlayer.name || "Jogador"}
              width={350}
              height={350}
              className={styles.playerMainImage}
              onError={(e) => {
                e.currentTarget.src = "/images/player-placeholder.png";
              }}
            />
          </div>

          <div className={styles.infosSection}>
            <div className={styles.nameContainer}>
              <h2 className={styles.playerName}>
                {selectedPlayer.name || "Nome indisponível"}
              </h2>
              <p className={styles.playerPosition}>{selectedPlayer.position}</p>
            </div>

            <div className={styles.playerInfos}>
              <p className={styles.playerInfo}>
                Camisa: {selectedPlayer.number || "Indisponível"}
              </p>
              {selectedPlayer.nationality && (
                <Image
                  src={convertGitHubUrlToRaw(selectedPlayer.nationality)}
                  alt="Nacionalidade"
                  width={50}
                  height={35}
                  className={styles.nationality}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}
            </div>

            <div className={styles.playerInfos}>
              <p className={styles.playerInfo}>
                Idade:{" "}
                {selectedPlayer.age
                  ? `${selectedPlayer.age} anos`
                  : "Indisponível"}
              </p>
              <p className={styles.playerInfo}>
                Data de Nascimento:{" "}
                {selectedPlayer.birthDate ||
                  selectedPlayer.dateOfBirth ||
                  "Indisponível"}
              </p>
            </div>

            <div className={styles.playerInfos}>
              <p className={styles.playerInfo}>
                Altura: {selectedPlayer.height || "Indisponível"}
              </p>
              <p className={styles.playerInfo}>
                Peso: {selectedPlayer.weight || "Indisponível"}
              </p>
            </div>
          </div>
        </section>
      )}

      <div className={styles.playersListContainer}>
        <button
          className={`${styles.scrollButton} ${styles.scrollButtonLeft}`}
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Rolar para esquerda"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className={styles.playersList} ref={scrollContainerRef}>
          {players.map((player, index) => (
            <div
              key={player.id || index}
              className={`${styles.player} ${
                selectedPlayer?.id === player.id ? styles.playerActive : ""
              }`}
              onClick={() => handlePlayerClick(player)}
            >
              <Image
                src={convertGitHubUrlToRaw(player.imageUrl)}
                alt={player.name || "Jogador"}
                width={150}
                height={150}
                className={styles.playerListImage}
                onError={(e) => {
                  e.currentTarget.src = "/images/player-placeholder.png";
                }}
              />
            </div>
          ))}
        </div>

        <button
          className={`${styles.scrollButton} ${styles.scrollButtonRight}`}
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Rolar para direita"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <section className={styles.lendasBannerSection}>
        <div className={styles.lendasBanner}>
          <div className={styles.bannerContainer}>
            <Image
              className={styles.bannerImage}
              src="/images/banner3.png"
              alt="Banner"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
            />

            <h2 className={styles.bannerText2}>CONHEÇA OS ÍDOLOS DO TIMÃO</h2>

            <Link href="/lendas">
              <button className={styles.lendasButton}>Saiba Mais</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
