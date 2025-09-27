import styles from "./elenco.module.css";
import Image from "next/image";

export default function ElencoPage() {
  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              {" "}
              Elenco atual 
            </h1>
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
    </main>
  );
}
