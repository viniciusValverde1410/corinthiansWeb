import styles from "./historia.module.css";
import Image from "next/image";
import Link from "next/link";
import TimelineCard from "../../components/timelineCard";
import ShieldCard from "../../components/shieldCard";
import RivalidadeCard from "../../components/rivalidadeCard";
import HeroSection from "@/components/heroSection";

export default function Historia() {
  const timelineData = [
    {
      year: "1910",
      title: "Fundação e Origem",
      image: "/images/historyPage/origem.png",
      text: "O Corinthians foi fundado em 1º de setembro de 1910 no Bom Retiro, São Paulo, por operários que buscavam criar um time representativo para o povo. O nome foi inspirado no Corinthian FC de Londres. Desde o início, o clube teve a identidade de 'time do povo', pioneiro em aceitar atletas negros e populares.",
    },
    {
      year: "1914",
      title: "Primeiro Título Paulista",
      image: "/images/historyPage/primeiroTitulo.png",
      text: "Em 1914, o Corinthians conquistou seu primeiro título importante, o Campeonato Paulista, de forma invicta. Nas décadas seguintes, acumulou títulos e rivalizou com o Palmeiras.",
    },
    {
      year: "1977",
      title: "Fim do Jejum",
      image: "/images/historyPage/fimJejum.png",
      text: "O gol de Basílio encerra 23 anos de jejum e marca a história do clube.",
    },
    {
      year: "1982",
      title: "Democracia Corintiana",
      image: "/images/historyPage/democracia.png",
      text: "O movimento Democracia Corintiana, liderado por Sócrates e Casagrande, revoluciona o clube e tem impacto político nacional, promovendo gestão democrática e luta contra a ditadura.",
    },
    {
      year: "2000",
      title: "Mundial de Clubes",
      image: "/images/historyPage/mundial2000.png",
      text: "O Corinthians conquista o primeiro Mundial de Clubes da FIFA, tornando-se referência internacional.",
    },
    {
      year: "2012",
      title: "Libertadores e Bi Mundial",
      image: "/images/historyPage/mundial2012.png",
      text: "O clube conquista a Libertadores invicto e o bicampeonato mundial, além de títulos paulistas e brasileiros, consolidando-se como potência do futebol.",
    },
  ];

  const escudos = [
    {
      ano: "1913",
      img: "/images/historyPage/escudo1.png",
      text: "Primeiro escudo do Corinthians, com as letras “C” e “P” (de Corinthians Paulista). Simples e amador, refletia o início humilde do time da várzea.",
    },
    {
      ano: "1914",
      img: "/images/historyPage/escudo2.png",
      text: "O escudo ganha moldura e mais presença visual, marcando a consolidação do clube nas competições da época.",
    },
    {
      ano: "1914-1916",
      img: "/images/historyPage/escudo3.png",
      text: "As letras passam a ser entrelaçadas, representando mais união e identidade entre os jogadores e o clube.",
    },
    {
      ano: "1916-1919",
      img: "/images/historyPage/escudo4.png",
      text: "As letras passam a ser entrelaçadas, representando mais união e identidade entre os jogadores e o clube.",
    },
    {
      ano: "1919-1939",
      img: "/images/historyPage/escudo5.png",
      text: "Surge o escudo com a bandeira do Estado de São Paulo e o nome completo, simbolizando o orgulho paulista e a profissionalização do time.",
    },
    {
      ano: "1939",
      img: "/images/historyPage/escudo6.png",
      text: "Inclui o âncora e os remos, homenagem às conquistas do clube em esportes náuticos, especialmente no remo.",
    },
    {
      ano: "1979",
      img: "/images/historyPage/escudo7.png",
      text: "O escudo é modernizado com traços e cores mais marcantes, coincidindo com uma nova era do Corinthians dentro e fora de campo.",
    },
    {
      ano: "Atual",
      img: "/images/historyPage/escudo8.png",
      text: "Versão atual, com estrelas que representam títulos brasileiros e mundiais, marcando a glória e a grandeza do clube.",
    },
  ];

  const rivalidades = [
    {
      img: "/images/historyPage/porco.png",
      torcidaImg: "/images/historyPage/derby.png",
      title: "Palmeiras",
      text: "O maior clássico do futebol paulista e um dos maiores do mundo: o Derby Paulista. Disputa histórica, rivalidade máxima e jogos inesquecíveis.",
    },
    {
      img: "/images/historyPage/tricas.png",
      torcidaImg: "/images/historyPage/6a1.png",
      title: "São Paulo",
      text: "O Majestoso é sempre cercado de tensão e grandes decisões, com confrontos marcantes em finais estaduais e nacionais.",
    },
    {
      img: "/images/historyPage/peixinho.png",
      torcidaImg: "/images/historyPage/peixe.png",
      title: "Santos",
      text: "O Clássico Alvinegro reúne duas das maiores torcidas do estado e já decidiu títulos importantes.",
    },
    {
      img: "/images/historyPage/urubu.png",
      torcidaImg: "/images/historyPage/flamenguinho.png",
      title: "Flamengo",
      text: "O Clássico das Multidões: Corinthians x Flamengo é o maior duelo interestadual do Brasil, com enorme apelo nacional.",
    },
  ];

  return (
    <main>
      <HeroSection
        titulo="História do time do povo"
        descricao=" 115 anos de bravura e glória, nascida da força e da paixão do povo
              de São Paulo, com uma trajetória marcada por conquistas históricas
              nos cenários nacional e internacional, episódios de coragem e
              resistência social e a dedicação incansável da maior e mais
              apaixonada torcida do Brasil. o Timão é mais que um clube, é um
              símbolo eterno de identidade, superação e orgulho inabalável para
              milhões de brasileiros e admiradores do futebol ao redor do
              mundo."
              imagem="/images/history.png"
      />

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
