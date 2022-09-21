import styles from "../../styles/Sign-up-client.module.scss";

export default function SignUpClient() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.form__title}>
          <h1>Register</h1>
        </div>
        <div className={styles.form__input}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Name"/>
        </div>
        <div className={styles.form__input}>
          <label htmlFor="email">Last name</label>
          <input type="text" name="last name" id="last name" placeholder="Last name" />
        </div>
        <div className={styles.form__input}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className={styles.form__input}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"placeholder="Password"/>
        </div>
        <div className={styles.form__input}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword"placeholder="Confirm Password" />
        </div>
        <div className={styles.form__input}>
          <button type="submit">Submit</button>
        </div>
        <div className={styles.form__input}>
          <p>Already have an account? <a href="#">Login</a></p>
        </div>
      </form>
    </div>
  );
}


