import Book from "../componet/Book";
import styles from "../styles/Home.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import SearchedBooks from "../componet/Searched";
import axios from "axios";
import { popular, BestSelling, Recommeded } from "../data";

const Books = () => {
  const [search, setSearch] = useState("");
  const [bookData, setbookData] = useState();
  const [toggleViewMode, setToggleViewMode] = useState(false);

  const searchBook = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBXKk0SslCsOfRiy9nXDq5LpojvH8UBLvM&maxResults=40`
      )
      .then((res) => setbookData(res.data.items))
      .catch((err) => console.log(err));
  };

  const HandleCloseOnClicked = () => {
    setToggleViewMode(false);
    setSearch("");
    if (search === "") {
      return;
    }
  };

  return (
    <div className={styles.book___container}>
      <form onSubmit={searchBook}>
        <div className={styles.books__input__section}>
          <input
            type="text"
            placeholder="Type Book name here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClick={() => setToggleViewMode(true)}
          />
          <SearchOutlinedIcon
            style={{ color: "#C15B33" }}
            onClick={searchBook}
          />
          <button type="submit">search</button>
        </div>
      </form>
      <div className={styles.options}>
        <Book title="Popular" dataItem={popular} />
        <Book title="Best Selling" dataItem={BestSelling} />
        <Book title="Recommeded" dataItem={Recommeded} />
      </div>

      <SearchedBooks
        toggleViewMode={toggleViewMode}
        close={HandleCloseOnClicked}
        bookData={bookData}
        search={search}
      />
    </div>
  );
};
export default Books;
