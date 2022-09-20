import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/ProfileProfessional.module.scss";

export default function ProfileProfessional() {
  return (
    <div className={styles.container}>
      <section className={styles.section1}>
        <div className={styles.section1__container}>
          <div className={styles.section1__yellow}></div>
          <div className={styles.section1__photo}>
            <button className={styles.section1__photo__more}>
              <Image
                src="/img/more.png"
                width={30}
                height={30}
                alt="Imagen More"
              ></Image>
            </button>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.section2__welcome}>
          <p>
            Great. You are now part of the HelpMe community. Add more
            information to your profile so more people will call you quickly.{" "}
          </p>
        </div>
        <div className={styles.section2__name}>
          <h1>Name Last Name</h1>
        </div>
        <div className={styles.section2__description}>
          <p>
            ou are now part of the HelpMe community. Add more information to
            your profile so more people will call you quickly ou are now part of
            the HelpMe community. Add more information to your profile so more
            people will call you quickly
          </p>
          <p>
            <strong>email:</strong>
          </p>
          <p>
            <strong>phone:</strong>
          </p>
          <p>
            <strong>city:</strong>
          </p>
          <p>
            <strong>address:</strong>
          </p>
          <p>
            <strong>certificates:</strong>
          </p>
          <p>
            <strong>score:</strong>
          </p>
          <p>
            <strong>comments:</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
