import styles from "../../styles/LoginProfessional.module.scss";

export default function LoginProfessional() {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <h1>Log in to HelpMe</h1>
        <h4>Professional/Technician</h4>
      </div>
      <form className={styles.form}>
        <div className={styles.section}>
          <section className={styles.section1}>
            <div className={styles.form__input}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
          </section>
        </div>
      </form>
      <div className={styles.form__input}>
        <button type="submit">Log in</button>
      </div>
    </div>
  );
}
