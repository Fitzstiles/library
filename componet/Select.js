import Link from "next/link";
import styles from "../styles/Home.module.css";
const Selecct = () => {
  return (
    <div className={styles.Container}>
      <p>Welcome to Libraire</p>
      <img
        src="https://writeindia.in/wp-content/uploads/2021/12/book-lover.gif"
        alt=""
      />
      <Link href="/Signup">Sign up</Link>
      <Link href="/Login">Login</Link>
    </div>
  );
};

export default Selecct;
