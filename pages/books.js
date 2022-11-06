import Book from "../componet/Book";
import styles from "../styles/Home.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";

const Books = ({ data }) => {
  const datas = data.items;

  const [search, setSearch] = useState("");
  const searchBook = (e) => {
    e.preventDefault();
    const resetInputField = () => {
      setSearch("");
    };
    resetInputField();
    console.log(search);
    // AIzaSyBXKk0SslCsOfRiy9nXDq5LpojvH8UBLvM
  };
  return (
    <div>
      {datas.map((dat) => {
        console;
      })}
      <div className={styles.books__input__section}>
        <input
          type="text"
          placeholder="Type Book name or Author here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchOutlinedIcon style={{ color: "#C15B33" }} onClick={searchBook} />
      </div>
      <Book title="Popular" />
      <Book title="Best Selling" />
      <Book title="Recommeded" />
    </div>
  );
};

export default Books;
