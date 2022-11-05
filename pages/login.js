import Link from "next/link";
import styles from "../styles/Home.module.css";
const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.header__section}>
        <h2>Welcome!</h2>
        <p>Login to your Account to continue...</p>
      </div>
      <div className={styles.image__section}>
        <div className={styles.login__image}>
          <img
            src="https://cheapwritingservice.com/images/img_girl-flying-books.svg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.input__section}>
        <div className={styles.email}>
          <p>Email address</p>
          <input type="email" />
        </div>
        <div className={styles.password}>
          <p>Password?</p>
          <input type="password" />
          <br />
          <Link href="/forgotpassword">forgot password</Link>
        </div>
      </div>
      <button>Login</button>
      <br />
      <span>Don&#39;t have an Account?</span> <Link href="/signup">Sign up</Link>
    </div>
  );
};

export default Login;
