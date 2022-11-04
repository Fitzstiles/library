import Link from "next/link";
import styles from "../styles/Home.module.css";
const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login__details}>
        <h2>Welcome!</h2>
        <p>Login to your Account to continue...</p>
        <div className={styles.login__image}>
          <img
            src="https://cheapwritingservice.com/images/img_girl-flying-books.svg"
            alt=""
          />
        </div>
        <div className={styles.input__section}>
          <div className={styles.email}>
            <p>Enter your Email</p>
            <input type="email" />
          </div>
          <div className={styles.password}>
            <p>Enter Password</p>
            <input type="password" />
            <br />
            <Link href="/forgotpassword">forgot password</Link>
          </div>
        </div>
        <button>Login</button>
        <br />
        <span>Don't have an Account?</span> <Link href="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
