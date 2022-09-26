/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";

function Navbar() {
  const BASE_URL = process.env.BASE_URL;
  const router = useRouter();
  const { data: session, status } = useSession();
  return (
    <>
      {session ? (
        <header>
          <div className={styles.container}>
            <div className={styles.logo}>
              <Image
                src="/img/logo2.png"
                width={35}
                height={35}
                alt="Imagen Home"
              ></Image>
            </div>
            <button onClick={() => router.push("/")}>HOME </button>
            <button
              onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
            >
              SIGN OUT
            </button>
            <div className={styles.logo}>
              <img
                src={session.user.image}
                alt="user image"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </div>
            <div>
              <h5>{session.user.name}</h5>
            </div>
          </div>
        </header>
      ) : (
        <header>
          <div className={styles.container}>
            <div className={styles.logo}>
              <Image
                src="/img/logo2.png"
                width={35}
                height={35}
                alt="Imagen Home"
              ></Image>
            </div>
            <button onClick={() => router.push("/")}>HOME </button>
            <button onClick={() => router.push("/login/client")}>LOG IN</button>
          </div>
        </header>
      )}
    </>
  );
}

export default Navbar;
