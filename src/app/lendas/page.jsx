"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./lendas.module.css";
import Image from "next/image";
import axios from "axios";
import HeroSection from "@/components/heroSection";

export default function LendasPage() {
  const [lendas, setLendas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const scrollRefs = useRef({});

  const convertGitHubUrlToRaw = (url) => {
    if (!url || url.trim() === "") return "/images/player-placeholder.png";

    if (url.includes("raw.githubusercontent.com")) {
      return url;
    }

    if (url.includes("github.com") && url.includes("/blob/")) {
      return url
        .replace("github.com", "raw.githubusercontent.com")
        .replace("/blob/", "/");
    }

    if (url.startsWith("http") || url.startsWith("/")) {
      return url;
    }

    return "/images/player-placeholder.png";
  };

  const handleImageError = (lendaId) => {
    setImageErrors((prev) => ({
      ...prev,
      [lendaId]: true,
    }));
  };

  useEffect(() => {
    const fetchLendas = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get("http://localhost:4000/legends");

        const lendasData = response.data.legends || response.data.lendas || [];

        setLendas(lendasData);
      } catch (err) {
        setError("Erro ao carregar os ídolos. Tente novamente mais tarde.");
        console.error("Erro ao buscar ídolos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLendas();
  }, []);

  const epocasHistoricas = [
    {
      id: "era-dourada",
      titulo: "🏅 2010–Atualmente | A Era Dourada – Libertadores e Mundial",
      contexto: "Período mais vitorioso da história moderna.",
      anos: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    },
    {
      id: "mundial-gloria",
      titulo: "🌍 2000–2009 | Mundial e Tempos de Glória",
      contexto: "Primeiro Mundial FIFA, títulos e a era pré-Ronaldo.",
      anos: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009],
    },
    {
      id: "democracia-renascimento",
      titulo: "✊ 1980–1999 | Democracia Corinthiana e Renascimento",
      contexto:
        "Democracia Corinthiana, retomada de títulos e consolidação como potência.",
      anos: [
        1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991,
        1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
      ],
    },
    {
      id: "fiel-jejum",
      titulo: "🏆 1960–1979 | Fiel e o Fim do Jejum",
      contexto:
        "Anos difíceis sem títulos, mas com ídolos eternos e o fim do jejum em 1977.",
      anos: [
        1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971,
        1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
      ],
    },
    {
      id: "era-classica",
      titulo: "⚽ 1940–1959 | Era Clássica e Popularização",
      contexto: "Expansão do clube e conquistas com times muito fortes.",
      anos: [
        1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951,
        1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959,
      ],
    },
    {
      id: "era-fundadora",
      titulo: "🏁 1910–1939 | A Era Fundadora e do Amadorismo",
      contexto:
        "Fundação do clube, primeiros títulos e afirmação como time do povo.",
      anos: [
        1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921,
        1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933,
        1934, 1935, 1936, 1937, 1938, 1939,
      ],
    },
  ];

  const lendasPorEpoca = epocasHistoricas.reduce((acc, epoca) => {
    acc[epoca.id] = lendas.filter((lenda) => epoca.anos.includes(lenda.year));
    return acc;
  }, {});

  const epocasComLendas = epocasHistoricas.filter(
    (epoca) => lendasPorEpoca[epoca.id].length > 0
  );

  const scroll = (epocaId, direction) => {
    const ref = scrollRefs.current[epocaId];
    if (ref) {
      const scrollAmount = 350;
      ref.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return (
      <main className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Carregando lendas...</p>
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
      <HeroSection
        titulo="Ídolos & Lendas"
        descricao="Conheça os grandes nomes que fizeram e fazem história vestindo o
              manto sagrado. Jogadores que eternizaram seus nomes e conquistaram
              o coração da Fiel Torcida."
        imagem="/images/lendas.png"
      />

      {epocasComLendas.map((epoca) => (
        <section key={epoca.id} className={styles.epocaSection}>
          <div className={styles.epocaHeader}>
            <h2 className={styles.epocaTitle}>{epoca.titulo}</h2>
            <p className={styles.epocaContexto}>{epoca.contexto}</p>
          </div>

          <div className={styles.scrollContainer}>
            <button
              className={`${styles.scrollButton} ${styles.scrollButtonLeft}`}
              onClick={() => scroll(epoca.id, "left")}
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

            <div
              className={styles.lendasScroll}
              ref={(el) => (scrollRefs.current[epoca.id] = el)}
            >
              {lendasPorEpoca[epoca.id].map((lenda) => (
                <div key={lenda.id} className={styles.lendaCard}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={
                        imageErrors[lenda.id]
                          ? "/images/player-placeholder.png"
                          : convertGitHubUrlToRaw(lenda.imageUrl) ||
                            "/images/player-placeholder.png"
                      }
                      alt={lenda.name || "Lenda do Corinthians"}
                      width={300}
                      height={350}
                      className={styles.cardImage}
                      onError={() => handleImageError(lenda.id)}
                      priority={false}
                    />
                    <div className={styles.cardNumber}>
                      {lenda.number || "?"}
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardName}>
                      {lenda.name || "Nome não informado"}
                    </h3>
                    <p className={styles.cardPosition}>
                      {lenda.position || "Posição não informada"}
                    </p>
                    <p className={styles.cardText}>
                      {lenda.shortText || "Descrição não disponível"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className={`${styles.scrollButton} ${styles.scrollButtonRight}`}
              onClick={() => scroll(epoca.id, "right")}
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
        </section>
      ))}
    </main>
  );
}
