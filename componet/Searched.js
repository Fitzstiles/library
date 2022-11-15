import styles from "../componet/Book.module.css";
import CloseIcon from "@mui/icons-material/Close";
import BookDetails from "./BookDetails";
import { useState } from "react";

const SearchedBooks = ({ toggleViewMode, close, bookData, search }) => {
  const contentClassName = toggleViewMode ? styles.background : styles.closed;
  const [toggleDetailsPage, settoggleDetailsPage] = useState(false);
  const [bookItem, setItem] = useState();
  const HandleCloseOnClicked = () => {
    settoggleDetailsPage(false);
  };
  return (
    <div className={contentClassName}>
      <div className={styles.icon}>
        <CloseIcon onClick={close} />
      </div>
      {search === "" ? (
        <h1>Search For Books</h1>
      ) : (
        <div className={styles.Search__book__container}>
          {bookData ? (
            bookData?.map((book) => {
              const bookimg =
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail;
              const author = book.volumeInfo.authors;

              if (bookimg != undefined) {
                return (
                  <div key={book.id} className={styles.searched__books}>
                    <div
                      className={styles.searched_image__container}
                      onClick={() => {
                        settoggleDetailsPage(true);
                        setItem(book);
                      }}
                    >
                      <img src={bookimg} alt="" />
                    </div>
                    <p>{book.volumeInfo.title}</p>
                    <p>{author}</p>
                  </div>
                );
              }
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
      <BookDetails
        toggleDetailsPage={toggleDetailsPage}
        close={HandleCloseOnClicked}
        bookData={bookItem}
      />
    </div>
  );
};

export default SearchedBooks;
