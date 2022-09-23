import Link from "next/link";
import styles from "../styles/Navbar.module.scss";


function Navbar() {
  return (
    <header>
      <div className={styles.container}>
      <button><Link href="/">HOME </Link></button>
      <button><Link href="/sign-up/client">SIGN UP </Link></button>
      </div>
    </header>
  );
}

export default Navbar;
