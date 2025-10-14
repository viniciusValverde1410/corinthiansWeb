"use client";

import { useState, useEffect } from "react";
import styles from "./titulos.module.css";
import Image from "next/image";
import axios from "axios";
import HeroSection from "@/components/heroSection";

const categorias = [
  { key: "estadual", label: "Estaduais" },
  { key: "nacional", label: "Nacionais" },
  { key: "internacional", label: "Internacionais" },
];

export default function TitulosPage() {
  const [titulos, setTitulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const convertGitHubUrlToRaw = (url) => {
    if (!url) return "/images/trofeu-placeholder.png";

    if (url.includes("raw.githubusercontent.com")) {
      return url;
    }

    if (url.includes("github.com") && url.includes("/blob/")) {
      return url
        .replace("github.com", "raw.githubusercontent.com")
        .replace("/blob/", "/");
    }

    return url;
  };

  useEffect(() => {
    const fetchTitulos = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get("https://corinthiansbackend.onrender.com/titles");
        const titulosData = response.data.titles || response.data.titulos || [];
        console.log("Dados dos títulos:", titulosData);
        setTitulos(titulosData);
      } catch (err) {
        setError("Erro ao carregar os títulos. Tente novamente mais tarde.");
        console.error("Erro ao buscar títulos:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTitulos();
  }, []);

  const titulosPorCategoria = {
    estadual: titulos.filter(t => t.category === 'estadual'),
    nacional: titulos.filter(t => t.category === 'nacional'),
    internacional: titulos.filter(t => t.category === 'internacional'),
  };

  if (loading) {
    return (
      <main className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Carregando títulos...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.errorContainer}>
        <h2 className={styles.errorTitle}>Algo deu errado</h2>
        <p className={styles.errorText}>{error}</p>
      </main>
    );
  }

  return (
    <main>

    <HeroSection titulo="Títulos do Corinthians" 
    descricao="Veja os troféus conquistados pelo Timão, separados por categoria. Cada título representa uma história de glória e superação!" 
    imagem="/images/trofeus.png" />

      {categorias.map((cat) => (
        <section key={cat.key} className={styles.categoriaSection}>
          <div className={styles.categoriaHeader}>
            <h2 className={styles.categoriaTitle}>{cat.label}</h2>
            <div className={styles.categoriaLine}></div>
          </div>

          <div className={styles.titulosContainer}>
            {titulosPorCategoria[cat.key]?.map((titulo) => (
              <div key={titulo.id} className={styles.tituloCard}>
                <div className={styles.cardTop}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={convertGitHubUrlToRaw(titulo.imageUrl)}
                      alt={titulo.name}
                      width={300}
                      height={350}
                      className={styles.cardImage}
                      onError={(e) => {
                        e.currentTarget.src = "/images/trofeu-placeholder.png";
                      }}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardName}>{titulo.name}</h3>
                    <p className={styles.cardDescription}>{titulo.description}</p>
                    <div className={styles.cardYears}>
                      {titulo.wonYear && titulo.wonYear.split(",").map((ano, idx) => (
                        <span key={idx} className={styles.cardYear}>{ano.trim()}</span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
