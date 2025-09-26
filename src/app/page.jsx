"use client";

import styles from "./page.module.css";
import { Carousel } from "antd";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";

export default function Home() {
  function ContactForm() {
    const [state, handleSubmit] = useForm("xgvnwwyn");
    if (state.succeeded) {
      return (
        <p>
          🖤 Obrigado por entrar em contato! Responderemos o mais breve
          possível.
        </p>
      );
    }
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">📧 Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Digite seu melhor email..."
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">💬 Mensagem</label>
        <textarea
          id="message"
          name="message"
          placeholder="Deixe sua mensagem..."
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? "⚽ Enviando..." : " Enviar Mensagem"}
        </button>
      </form>
    );
  }

  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles["blur-layer-1"]}></div>
        <div className={styles["blur-layer-2"]}></div>
        <div className={styles.containerHero}>
          <h1 className={styles.heroTitle}>
            Sport Club{" "}
            <span className={styles.heroTitleHighlight}>Corinthians</span>{" "}
            Paulista
          </h1>
          <p className={styles.heroSubtitle}>
            Mais de 114 anos de muita história e tradição do time do povo em um
            só lugar!
          </p>
          <div className={styles.heroButtons}>
            <a href="/historia" className={styles.heroButton}>
              📖 História
            </a>
            <a
              href="/titulos"
              className={`${styles.heroButton} ${styles.heroButtonWhite}`}
            >
              🏆 Títulos
            </a>
            <a href="/elenco" className={styles.heroButton}>
              👥 Elenco
            </a>
          </div>
        </div>
      </section>

      <section className={styles.atrativeSection}>
        <div className={styles.bannerContainer}>
          <Image
            className={styles.bannerImage}
            src="/images/banner.png"
            alt="Banner"
            layout="fill"
            objectFit="cover"
          />

          <h2 className={styles.bannerText}>
            TUDO DO ÚLTIMO BRASILEIRO A CONQUISTAR O MUNDO!
          </h2>
        </div>
      </section>

      <section className={styles.navigationSection}>
        <div className={styles.navigationSectionTitle}>
          <h1>Conheça mais do time do povo</h1>
          <p>Descubra tudo sobre o Timão</p>
        </div>

        <div className={styles.navigationSectionContent}>
          <div className={styles.navigationCarousel}>
            <Carousel
              autoplay={true}
              arrows
              infinite={true}
              className={styles.carousel}
            >
              <div>
                <div className={styles.contentCarousel}>
                  <Image
                    src="/images/carouselHome/uniforme.png"
                    alt="Uniforme do Corinthians"
                    className={styles.carouselImage}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                  <div className={styles.carouselText}>
                    <h1>Uniforme do Timão</h1>
                    <h2>Saiba mais sobre nosso manto!</h2>
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.contentCarousel}>
                  <Image
                    src="/images/carouselHome/torcida.png"
                    alt="Torcida do Corinthians"
                    className={styles.carouselImage}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                  <div className={styles.carouselText}>
                    <h1>Torcida apaixonada</h1>
                    <h2>Conheça o bando de loucos!</h2>
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.contentCarousel}>
                  <Image
                    src="/images/carouselHome/estadio.png"
                    alt="Neo Química Arena - Casa da Fiel"
                    className={styles.carouselImage}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                  <div className={styles.carouselText}>
                    <h1>Neo Química Arena</h1>
                    <h2>Conheça a casa da fiel!</h2>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>

          <div className={styles.navigationSectionText}>
            <h3 className={styles.callToActionTitle}>
              Informações institucionais e estruturais completas
            </h3>
            <p className={styles.callToActionSubtitle}>
              Conheça os uniformes oficiais, nosso estádio, a torcida apaixonada
              e o hino oficial. Explore a essência do Sport Club Corinthians
              Paulista!
            </p>
            <a href="/clube" className={styles.clubButton}>
              ⛊ Explorar o Clube
            </a>
          </div>
        </div>
      </section>

      <section className={styles.transitionSection}></section>

      <section className={styles.formSection}>
        <div className={styles.formSectionTitle}>
          <h1>Entre em contato!</h1>
          <p>
            Fique a vontade para relatar qualquer problema, sugestão ou apenas
            deixar uma mensagem.
          </p>
        </div>

        <div className={styles.formContainer}>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
