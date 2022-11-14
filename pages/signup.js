import Link from "next/link";
import styles from "../styles/Home.module.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useStateValue } from "../context/StateContext";
import { useRouter } from "next/router";
const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const { signup } = useStateValue();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      router.push("/books");
      signInSuccessUrl: "/books";
    } catch (err) {
      alert(err);
    }
  };
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
        <p>Sign up to continue...</p>
      </div>
      <div className={styles.image__section}>
        <div className={styles.login__image}>
          <img
            src="https://trengo.com/blog/wp-content/uploads/2020/03/401-1536x1536.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.input__section}>
        <div className={styles.email}>
          <p>Email address</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.password}>
          <p>Password?</p>
          <input
            type={passwordShown ? "text" : "password"}
            onChange={(e) => setpassword(e.target.value)}
          />
          {passwordShown ? (
            <VisibilityOffIcon onClick={togglePassword} />
          ) : (
            <RemoveRedEyeOutlinedIcon onClick={togglePassword} />
          )}
        </div>
      </div>

      <div className={styles.final__section}>
        <button onClick={handleSubmit}>Sign up</button>
        <br />
        <span>
          Already Have an Account ? <Link href="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
