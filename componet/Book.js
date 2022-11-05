import styles from "../componet/Book.module.css";
const Book = ({ title }) => {
  return (
    <div className={styles.book__container}>
      <h1>{title}</h1>
      <div className={styles.book__details}>
        <div className={styles.book__row}>
          <div className={styles.image__container}>
            <img
              src="https://m.media-amazon.com/images/I/51u8ZRDCVoL._AC_SY780_.jpg"
              alt=""
            />
          </div>
          <p>Rich Dad poor dad</p>
          <p>by Rober T kiyoseki</p>
        </div>
        <div className={styles.book__row}>
          <div className={styles.image__container}>
            <img
              src="https://m.media-amazon.com/images/I/51u8ZRDCVoL._AC_SY780_.jpg"
              alt=""
            />
          </div>
          <p>Rich Dad poor dad</p>
          <p>by Rober T kiyoseki</p>
        </div>
        <div className={styles.book__row}>
          <div className={styles.image__container}>
            <img
              src="https://m.media-amazon.com/images/I/51u8ZRDCVoL._AC_SY780_.jpg"
              alt=""
            />
          </div>
          <p>Rich Dad poor dad</p>
          <p>by Rober T kiyoseki</p>
        </div>
        <div className={styles.book__row}>
          <div className={styles.image__container}>
            <img
              src="https://m.media-amazon.com/images/I/51u8ZRDCVoL._AC_SY780_.jpg"
              alt=""
            />
          </div>
          <p>Rich Dad poor dad</p>
          <p>by Rober T kiyoseki</p>
        </div>
        <div className={styles.book__row}>
          <div className={styles.image__container}>
            <img
              src="https://m.media-amazon.com/images/I/51u8ZRDCVoL._AC_SY780_.jpg"
              alt=""
            />
          </div>
          <p>Rich Dad poor dad</p>
          <p>by Rober T kiyoseki</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
