import styles from "../componet/Book.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const SearchedBooks = ({ toggleViewMode, close, bookData, search }) => {
  const contentClassName = toggleViewMode ? styles.background : styles.closed;

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
                    <div className={styles.searched_image__container}>
                      <Link href={book.id}>
                        <img src={bookimg} alt="" />
                      </Link>
                    </div>
                    <p>{book.volumeInfo.title}</p>
                    <p>{author}</p>
                  </div>
                );
              }
            })
          ) : (
            <p>loading...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchedBooks;
