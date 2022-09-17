import {useRouter} from 'next/router'
import Image from "next/image";
import styles from "../../styles/Activate.module.scss";


export default function ActivateAccount() {
  const router = useRouter();
  const { token } = router.query;
  const activateAccount = async () => {
    const response = await fetch(`/api/auth/activate-account/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      router.push("/");
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.container__title}>
        <h1 className={styles.title}>Activate Account</h1>
      </section>
      <section className={styles.container__content}>
            <p>
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          nullam nunc justo sagittis suscipit ultrices.
        </p>
      </section>
      <section className={styles.container__button}>
        <button className={styles.button} onClick={activateAccount}>
          ACTIVATE
        </button>
      </section>
    </div>
  );
}

