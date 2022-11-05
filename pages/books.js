import Book from "../componet/book";
import styles from "../styles/Home.module.css";
const Books = () => {
  return (
    <div>
      <div className={styles.books__input__section}>
        <input type="text" placeholder="type Book name or Author her" />
      </div>

      <Book title="Popular" />
      <Book title="Recommeded" />
    </div>
  );
};

export default Books;
