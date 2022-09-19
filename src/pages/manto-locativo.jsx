import Image from "next/image";
import styles from "../styles/Manto-electro.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <div className={styles.header__img1}>
          <Image
            src="/img/paint-roller.png"
            width={90}
            height={90}
            alt="Imagen Home"
          ></Image>
        </div>
        <div className={styles.header__title}>
          <h1>Reparaciones Domésticas</h1>
        </div>
      </section>
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
    </div>
  );
}
