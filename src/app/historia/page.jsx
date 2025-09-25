import styles from "./historia.module.css";
import Image from "next/image";
import Link from "next/link";
import TimelineCard from "../../components/timelineCard";


export default function Historia() {

    const timelineData = [
    {
      year: "1910",
      title: "Fundação e Origem",
      text: "O Corinthians foi fundado em 1º de setembro de 1910 no Bom Retiro, São Paulo, por operários que buscavam criar um time representativo para o povo. O nome foi inspirado no Corinthian FC de Londres. Desde o início, o clube teve a identidade de 'time do povo', pioneiro em aceitar atletas negros e populares.",
    },
    {
      year: "1914",
      title: "Primeiro Título Paulista",
      text: "Em 1914, o Corinthians conquistou seu primeiro título importante, o Campeonato Paulista, de forma invicta. Nas décadas seguintes, acumulou títulos e rivalizou com o Palmeiras.",
    },
    {
      year: "1961",
      title: "Início do Jejum",
      text: "O clube entra em um longo período sem títulos, que duraria até 1977.",
    },
    {
      year: "1977",
      title: "Fim do Jejum",
      text: "O gol de Basílio encerra 23 anos de jejum e marca a história do clube.",
    },
    {
      year: "1982",
      title: "Democracia Corintiana",
      text: "O movimento Democracia Corintiana, liderado por Sócrates e Casagrande, revoluciona o clube e tem impacto político nacional, promovendo gestão democrática e luta contra a ditadura.",
    },
    {
      year: "2000",
      title: "Mundial de Clubes",
      text: "O Corinthians conquista o primeiro Mundial de Clubes da FIFA, tornando-se referência internacional.",
    },
    {
      year: "2012",
      title: "Libertadores e Bi Mundial",
      text: "O clube conquista a Libertadores invicto e o bicampeonato mundial, além de títulos paulistas e brasileiros, consolidando-se como potência do futebol.",
    },
  ];


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

       <section className={styles.timelineSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.bannerText}>TIMELINE DO CORINTHIANS</h2>
          <p className={styles.subtitle}>Fatos marcantes na história do clube</p>
        </div>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineConnector} />
          <TimelineCard timelineData={timelineData} />
        </div>
      </section>


    </div>
  );
}
