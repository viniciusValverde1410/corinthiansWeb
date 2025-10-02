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

      <section className={styles.elencoSection}>

        <div className={styles.infosSection}>
          <div className={styles.nameContainer}>
            <h2 className={styles.playerName}>Cássio Ramos</h2>
            <p className={styles.playerPosition}>Goleiro</p>
          </div>

          <div className={styles.playerInfos}>
            <p className={styles.playerInfo}>Idade: 35 anos</p>
            <Image 
              src="/images/br.png"
              alt="Bandeira "
              width={20}
              height={15}
              className={styles.nationality}
            />
          </div>

          <div className={styles.playerInfos}>
            <p className={styles.playerInfo}>Altura: 1,93m</p>
            <p className={styles.playerInfo}>Peso: 92kg</p>
          </div>
        </div>

      </section>

              <div className={styles.playersList}>
          <div className={styles.player}>
            <Image
              src="/images/elenco/cassio.png"
              alt="Cássio Ramos"
              width={150}
              height={150}
              className={styles.playerListImage}
            />
          </div>
        </div>
    </main>
  );
}
