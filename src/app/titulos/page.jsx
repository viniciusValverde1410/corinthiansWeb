"use client";

import { useState, useEffect } from "react";
import styles from "./titulos.module.css";
import Image from "next/image";
import axios from "axios";

const categorias = [
  { key: "estadual", label: "Estaduais" },
  { key: "nacional", label: "Nacionais" },
  { key: "internacional", label: "Internacionais" },
];

export default function TitulosPage() {
  const [titulos, setTitulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTitulos = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get("http://localhost:4000/titles");
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
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>Títulos do Corinthians</h1>
            <p className={styles.institutionalText}>
              Veja os troféus conquistados pelo Timão, separados por categoria. Cada título representa uma história de glória e superação!
            </p>
          </div>
          <div className={styles.imageContent}>
            <Image
              src="/images/trofeus.png"
              alt="Troféus do Corinthians"
              className={styles.escudo}
              width={180}
              height={180}
              priority
            />
          </div>
        </div>
      </section>

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
                      src={titulo.imageUrl || "/images/trofeu-placeholder.png"}
                      alt={titulo.name}
                      width={300}
                      height={350}
                      className={styles.cardImage}
                      onError={(e) => {
                        e.currentTarget.src = "/images/player-placeholder.png";
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

                <div className={styles.cardGallery}>
                  <div className={styles.galleryItem}>
                    {titulo.imageTeam1 ? (
                      <>
                        <Image
                          src={titulo.imageTeam1}
                          alt="Comemoração 1"
                          width={300}
                          height={200}
                          className={styles.galleryImage}
                        />
                        {titulo.imageTeamText1 && (
                          <div className={styles.galleryOverlay}>
                            <p className={styles.galleryText}>{titulo.imageTeamText1}</p>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className={styles.galleryPlaceholder}>
                        <p className={styles.placeholderText}>Imagem não disponível</p>
                      </div>
                    )}
                  </div>

                  <div className={styles.galleryItem}>
                    {titulo.imageTeam2 ? (
                      <>
                        <Image
                          src={titulo.imageTeam2}
                          alt="Comemoração 2"
                          width={300}
                          height={200}
                          className={styles.galleryImage}
                        />
                        {titulo.imageTeamText2 && (
                          <div className={styles.galleryOverlay}>
                            <p className={styles.galleryText}>{titulo.imageTeamText2}</p>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className={styles.galleryPlaceholder}>
                        <p className={styles.placeholderText}>Imagem não disponível</p>
                      </div>
                    )}
                  </div>

                  <div className={styles.galleryItem}>
                    {titulo.imageTeam3 ? (
                      <>
                        <Image
                          src={titulo.imageTeam3}
                          alt="Comemoração 3"
                          width={300}
                          height={200}
                          className={styles.galleryImage}
                        />
                        {titulo.imageTeamText3 && (
                          <div className={styles.galleryOverlay}>
                            <p className={styles.galleryText}>{titulo.imageTeamText3}</p>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className={styles.galleryPlaceholder}>
                        <p className={styles.placeholderText}>Imagem não disponível</p>
                      </div>
                    )}
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
