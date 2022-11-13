import styles from "../componet/Book.module.css";
import { bookId } from "../componet/Searched";
const Details = () => {
  return (
    <div className={styles.details__page}>
      <div className={styles.details__page__header__section}>
        {console.log(bookId)}
        <div className={styles.image__section}>
          <img
            src="https://alvarotrigo.com/blog/assets/imgs/2022-02-22/road-to-react-best-book.jpeg"
            alt=""
          />
        </div>
        <div className={styles.details}>
          <p>Learn React Js</p>
          <small>Alvario Trigo</small>
          <br />
          <a href="/">more</a>
        </div>
      </div>
      <section className={styles.Details}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ab!
          Molestias necessitatibus inventore obcaecati facilis vel recusandae
          doloribus hic debitis enim quae nobis, quia repellat neque ratione,
          eos numquam incidunt!
        </p>
      </section>
    </div>
  );
};

export default Details;
