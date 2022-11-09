import Book from "../componet/Book";
import styles from "../styles/Home.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import SearchedBooks from "../componet/Searched";

const Books = ({ data }) => {
  const [search, setSearch] = useState("");
  const [toggleViewMode, setToggleViewMode] = useState(false);

  const searchBook = (e) => {
    e.preventDefault();
    const resetInputField = () => {
      setSearch("");
    };
    resetInputField();
    if (search === "") {
      return;
    } else {
      alert(search);
    }
    // AIzaSyBXKk0SslCsOfRiy9nXDq5LpojvH8UBLvM
  };

  const HandleCloseOnClicked = () => setToggleViewMode(false);
  return (
    <form onSubmit={searchBook}>
      <div className={styles.books__input__section}>
        <input
          type="text"
          placeholder="Type Book name or Author here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={() => setToggleViewMode(true)}
        />
        <SearchOutlinedIcon style={{ color: "#C15B33" }} onClick={searchBook} />
        <button type="submit">search</button>
      </div>
      <Book title="Popular" />
      <Book title="Best Selling" />
      <Book title="Recommeded" />
      <SearchedBooks
        toggleViewMode={toggleViewMode}
        close={HandleCloseOnClicked}
      />
    </form>
  );
};

export default Books;
