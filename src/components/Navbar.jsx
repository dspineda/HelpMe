import styles from "../styles/Navbar.module.scss";

function Navbar() {
  return (
    <header>
      <div className={styles.container}>
        <button>HOME</button>
        <button>ARTICLES</button>
        <button>PORTFOLIO</button>
        <button>ABOUT</button>
        <button>CONTACT</button>
      </div>
    </header>
  );
}

export default Navbar;
