import styles from "./historia.module.css";
import Image from "next/image";
import Link from "next/link";
import TimelineCard from "../../components/timelineCard";
import ShieldCard from "../../components/shieldCard";
import RivalidadeCard from "../../components/rivalidadeCard";

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

  const escudos = [
    {
      ano: "1910",
      img: "/images/escudo1910.png",
      text: "Primeiro escudo, simples e inspirado no time inglês.",
    },
    {
      ano: "1919",
      img: "/images/escudo1919.png",
      text: "Adição dos ramos de louro e da âncora, símbolos náuticos.",
    },
    {
      ano: "1939",
      img: "/images/escudo1939.png",
      text: "Brasão ganha mais detalhes e a bandeira paulista.",
    },
    {
      ano: "1990s",
      img: "/images/escudo1990.png",
      text: "Modernização do traço e tipografia.",
    },
    {
      ano: "Atual",
      img: "/images/escudoAtual.png",
      text: "Escudo atual, símbolo máximo da tradição corinthiana.",
    },
  ];

  const rivalidades = [
    {
      img: "/images/palmeiras.png",
      title: "Palmeiras",
      text: "O maior clássico do futebol paulista e um dos maiores do mundo: o Derby Paulista. Disputa histórica, rivalidade máxima e jogos inesquecíveis.",
    },
    {
      img: "/images/saopaulo.png",
      title: "São Paulo",
      text: "O Majestoso é sempre cercado de tensão e grandes decisões, com confrontos marcantes em finais estaduais e nacionais.",
    },
    {
      img: "/images/santos.png",
      title: "Santos",
      text: "O Clássico Alvinegro reúne duas das maiores torcidas do estado e já decidiu títulos importantes.",
    },
    {
      img: "/images/flamengo.png",
      title: "Flamengo",
      text: "O Clássico das Multidões: Corinthians x Flamengo é o maior duelo interestadual do Brasil, com enorme apelo nacional.",
    },
  ];

  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>História do time do povo</h1>
            <p className={styles.institutionalText}>
              115 anos de bravura e glória, nascida da força e da paixão do povo
              de São Paulo, com uma trajetória marcada por conquistas históricas
              nos cenários nacional e internacional, episódios de coragem e
              resistência social e a dedicação incansável da maior e mais
              apaixonada torcida do Brasil. o Timão é mais que um clube, é um
              símbolo eterno de identidade, superação e orgulho inabalável para
              milhões de brasileiros e admiradores do futebol ao redor do
              mundo."
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
          <p className={styles.subtitle}>
            Fatos marcantes na história do clube
          </p>
        </div>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineConnector} />
          <TimelineCard timelineData={timelineData} />
        </div>
      </section>

      <section className={styles.escudosSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.bannerText}>ESCUDOS DO TIMÃO</h2>
          <p className={styles.subtitle}>Evolução dos símbolos</p>
        </div>{" "}
        <div className={styles.escudosContainer}>
          <ShieldCard escudos={escudos} />
        </div>
      </section>

      <section className={styles.rivalidadesSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.bannerText}>RIVALIDADES</h2>
          <p className={styles.subtitle}>Clubes rivais do timão</p>
        </div>{" "}
        <div className={styles.rivalidadesContainer}>
          <RivalidadeCard rivalidades={rivalidades} />
        </div>
      </section>

      <section className={styles.titleBannerSection}>
        <div className={styles.titleBanner}>
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

            <h2 className={styles.bannerText2}>CONHEÇA OS TÍTUOS DO TIMÃO</h2>

            <Link href="/historia">
              <button className={styles.titleButton}>Saiba Mais</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
