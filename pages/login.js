import Link from "next/link";
import styles from "../styles/Home.module.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useState } from "react";
const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <div className={styles.login}>
      <div className={styles.header__section}>
        <h2>Welcome!</h2>
        <p>Log in to your Account to continue...</p>
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
          <input type={passwordShown ? "text" : "password"} />
          <RemoveRedEyeOutlinedIcon onClick={togglePassword} />
          <br />
          <Link href="/">Forgot Password ?</Link>
        </div>
      </div>

      <div className={styles.final__section}>
        <button>Log in</button>
        <br />
        <span>
          Don&#39;t have an Account yet? <Link href="/signup">Sign up</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
