/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Link from "next/link";
import styles from "../../styles/LoginClient.module.scss";

export default function LoginProfessional() {
  const BASE_URL = process.env.BASE_URL;
  const router = useRouter();
  const [form, setForm] = useState({});

  const loginProfessional = async () => {
    const professional = await fetch("/api/auth/users/login-professional", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await professional.json();
    if (data.token) {
      if (data.token) {
        localStorage.setItem("token", data.token);
        router.push("/");
      } else {
        alert(Fallo);
      }
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    loginProfessional();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <h1>Log in to HelpMe</h1>
        <h4>User</h4>
      </div>
      <form className={styles.form} onSubmit={handleSignUp}>
        <div className={styles.section}>
          <section className={styles.section1}>
            <div className={styles.form__input}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className={styles.form__input}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
          </section>
        </div>
        <div className={styles.form__input}>
          <button type="submit">Log in</button>
        </div>
        <div className={styles.other__Google}>
          <button
            type="button"
            className={styles.signup__with__button}
            onClick={() =>
              router.push("/sign-up/client")
            }
          >
            {" "}
            <b>Sign Up</b>{" "}
          </button>
        </div>
        <div className={styles.other__Google}>
          <button
            type="button"
            className={styles.signup__with__button}
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000" })
            }
          >
            {" "}
            <div className={styles.signup__with}>
              <img
                className={styles.signup__with__img}
                src="..\img\google.png"
                alt=""
              />{" "}
            </div>
            <b>Continue with Google</b>{" "}
          </button>
        </div>
        <div className={styles.other__Github}>
          <button
            type="button"
            className={styles.signup__with__button}
            onClick={() =>
              signIn("github", { callbackUrl: "http://localhost:3000" })
            }
          >
            {" "}
            <div className={styles.signup__with}>
              <img
                className={styles.signup__with__img}
                src="..\img\Octocat.png"
                alt=""
              />{" "}
            </div>
            <b>Continue with GitHub</b>{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
