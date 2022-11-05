import Book from "../componet/Book";
import styles from "../styles/Home.module.css";
import SearchOutlinedIcon from "@mui/icons-material";
const Books = () => {
  return (
    <div>
      <div className={styles.books__input__section}>
        <input type="text" placeholder="type Book name or Author her" />
        <SearchOutlinedIcon />
      </div>

      <Book title="Popular" />
      <Book title="Recommeded" />
    </div>
  );
};

export default Books;
