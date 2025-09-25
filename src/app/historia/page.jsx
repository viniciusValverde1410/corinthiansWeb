import styles from "./historia.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Historia() {

  return (
    <div>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>História do time do povo</h1>
            <p className={styles.institutionalText}>
              115 anos de
              bravura e glória, nascida da força e da paixão do povo de São
              Paulo, com uma trajetória marcada por conquistas
              históricas nos cenários nacional e internacional, episódios de
              coragem e resistência social e a dedicação incansável da maior e mais apaixonada
              torcida do Brasil. o Timão é mais que um clube, é um símbolo
              eterno de identidade, superação e orgulho inabalável para milhões
              de brasileiros e admiradores do futebol ao redor do mundo."
            </p>
          </div>
          <div className={styles.imageContent}>
            <Image
              src="/images/history.png"
              alt="Operários que fundaram o Corinthians"
              className={styles.image}
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
