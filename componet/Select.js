import Link from "next/link";
import styles from "../styles/Home.module.css";
const Selecct = () => {
  return (
    <div className={styles.Container}>
      <p>
        Welcome to <br />
        Librarie
      </p>
      <div className={styles.image}>
        <img
          src="https://writeindia.in/wp-content/uploads/2021/12/book-lover.gif"
          alt=""
        />
      </div>
      <Link href="/signup">Sign up</Link>
      <Link href="/login">Log in</Link>
    </div>
  );
};

export default Selecct;
