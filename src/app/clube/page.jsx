import styles from "./clube.module.css";
import Image from "next/image";

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
    </div>
  );
}
