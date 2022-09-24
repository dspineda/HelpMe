import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";

function Navbar() {
  const router = useRouter();
  return (
    <header>
      <div className={styles.container}>
        <button onClick={() => router.push("/")}>HOME </button>
        <button onClick={() => router.push("/sign-up/client")}>SIGN UP</button>
      </div>
    </header>
  );
}

export default Navbar;
