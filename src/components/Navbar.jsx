/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

function Navbar() {
  const BASE_URL = process.env.BASE_URL;
  const router = useRouter();
  const { data: session, status } = useSession();
  return (
    <>
      {session ? (
        <header>
          <div className={styles.container}>
            <button onClick={() => router.push("/")}>HOME </button>
            <button onClick={() => signOut({ callbackUrl: BASE_URL })}>
              SIGN OUT
            </button>
            <div className={styles.logo}>
              <img
                src={session.user.image}
                alt="user image"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </div>
            <di>
              <h5>{session.user.name}</h5>
            </di>
          </div>
        </header>
      ) : (
        <header>
          <div className={styles.container}>
            <button onClick={() => router.push("/")}>HOME </button>
            <button onClick={() => router.push("/login/client")}>LOG IN</button>
          </div>
        </header>
      )}
    </>
  );
}

export default Navbar;
