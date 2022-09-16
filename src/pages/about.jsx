import Image from "next/image";
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <section className={styles.header__img1}>
        <Image
          src="/img/about.png"
          width={1880}
          height={613}
          alt="Imagen Home"
        ></Image>
      </section>
      <section className={styles.info}>
        <div className={styles.info__title}>
          <h1>Popular Services</h1>
        </div>
        <div className={styles.info__paragraph}>
          <p>
            As a customer-focused solution provider, we’re dedicated to
            redefining the home improvement service experience for homeowners
            and commercial property owners.
          </p>
        </div>
        <section className={styles.info__services}>
          <div className={styles.info__services__paint}>
            <div className={styles.info__services__paint__img}>
              <Image
                src="/img/womenPaint.png"
                width={277}
                height={213}
                alt="Service Paint"
              ></Image>
            </div>
            <div className={styles.info__services__paint__title}>
              <h4>HOUSE PAINTING</h4>
            </div>
            <div className={styles.info__services__paint__paragraph}>
              <p>
                By painting the doors of your home, you can immediately boost
                your home’s curb appeal.
              </p>
            </div>
          </div>
          <div className={styles.info__services__paint}>
            <div className={styles.info__services__paint__img}>
              <Image
                src="/img/womenPaint.png"
                width={277}
                height={213}
                alt="Service Paint"
              ></Image>
            </div>
            <div className={styles.info__services__paint__title}>
              <h4>HOUSE PAINTING</h4>
            </div>
            <div className={styles.info__services__paint__paragraph}>
              <p>
                By painting the doors of your home, you can immediately boost
                your home’s curb appeal.
              </p>
            </div>
          </div>
          <div className={styles.info__services__paint}>
            <div className={styles.info__services__paint__img}>
              <Image
                src="/img/womenPaint.png"
                width={277}
                height={213}
                alt="Service Paint"
              ></Image>
            </div>
            <div className={styles.info__services__paint__title}>
              <h4>HOUSE PAINTING</h4>
            </div>
            <div className={styles.info__services__paint__paragraph}>
              <p>
                By painting the doors of your home, you can immediately boost
                your home’s curb appeal.
              </p>
            </div>
          </div>
          <div className={styles.info__services__paint}>
            <div className={styles.info__services__paint__img}>
              <Image
                src="/img/womenPaint.png"
                width={277}
                height={213}
                alt="Service Paint"
              ></Image>
            </div>
            <div className={styles.info__services__paint__title}>
              <h4>HOUSE PAINTING</h4>
            </div>
            <div className={styles.info__services__paint__paragraph}>
              <p>
                By painting the doors of your home, you can immediately boost
                your home’s curb appeal.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.infoAdd}>
          <div className={styles.infoAdd__title}>
            <h1>Why Choose Us</h1>
          </div>
          <div className={styles.infoAdd__paragraph}>
            <p>
              We are a team of professionals with over 20 years of experience in
              the industry. We are committed to providing the highest quality
              service and customer satisfaction.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
