import styles from "../componet/Preloader.module.css";
import { motion } from "framer-motion";
const Preloader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.images__container}>
        <img src="../images/logo.png" alt="" />
      </div>
      <motion.p
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        Librarie
      </motion.p>
    </div>
  );
};

export default Preloader;

// C15B33
