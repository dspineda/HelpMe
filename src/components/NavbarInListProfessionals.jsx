import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

function NavbarInListProfessionals() {


  return (
    <header>
      <div className={styles.container}>
        <button><Link href="/">HOME </Link></button>
      </div>
    </header>
  );
}

export default NavbarInListProfessionals;
