"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./lendas.module.css";
import Image from "next/image";
import axios from "axios";

export default function LendasPage() {
  const [lendas, setLendas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRefs = useRef({});

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

  const lendasPorDecada = lendas.reduce((acc, lenda) => {
    const decada = Math.floor(lenda.year / 10) * 10;
    if (!acc[decada]) {
      acc[decada] = [];
    }
    acc[decada].push(lenda);
    return acc;
  }, {});

  const decadasOrdenadas = Object.keys(lendasPorDecada).sort((a, b) => b - a);

  const scroll = (decada, direction) => {
    const ref = scrollRefs.current[decada];
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
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>Ídolos & Lendas</h1>
            <p className={styles.institutionalText}>
              Conheça os grandes nomes que fizeram e fazem história vestindo o manto sagrado. 
              Jogadores que eternizaram seus nomes e conquistaram o coração da Fiel Torcida.
            </p>
          </div>
          <div className={styles.imageContent}>
            <Image
              src="/images/history.png"
              alt="Ídolos do Corinthians"
              className={styles.escudo}
              width={180}
              height={180}
              priority
            />
          </div>
        </div>
      </section>

      {decadasOrdenadas.map((decada) => (
        <section key={decada} className={styles.decadaSection}>
          <div className={styles.decadaHeader}>
            <h2 className={styles.decadaTitle}>Anos {decada}</h2>
          </div>

          <div className={styles.scrollContainer}>
            <button
              className={`${styles.scrollButton} ${styles.scrollButtonLeft}`}
              onClick={() => scroll(decada, "left")}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div 
              className={styles.lendasScroll} 
              ref={(el) => scrollRefs.current[decada] = el}
            >
              {lendasPorDecada[decada].map((lenda) => (
                <div key={lenda.id} className={styles.lendaCard}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={lenda.imageUrl || "/images/player-placeholder.png"}
                      alt={lenda.name}
                      width={300}
                      height={350}
                      className={styles.cardImage}
                      onError={(e) => {
                        e.currentTarget.src = "/images/player-placeholder.png";
                      }}
                    />
                    <div className={styles.cardNumber}>{lenda.number}</div>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardName}>{lenda.name}</h3>
                    <p className={styles.cardPosition}>{lenda.position}</p>
                    <p className={styles.cardText}>{lenda.shortText}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className={`${styles.scrollButton} ${styles.scrollButtonRight}`}
              onClick={() => scroll(decada, "right")}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </section>
      ))}
    </main>
  );
}