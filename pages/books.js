import Book from "../componet/Book";
import styles from "../styles/Home.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Books = () => {
  return (
    <div>
      <div className={styles.books__input__section}>
        <input type="text" placeholder="Type Book name or Author her" />
        <SearchOutlinedIcon style={{ color: "black" }} />
      </div>

      <Book title="Popular" />
      <Book title="Best Selling" />
      <Book title="Recommeded" />
    </div>
  );
};

export default Books;
