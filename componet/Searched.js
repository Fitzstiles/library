import styles from "../componet/Book.module.css";
import CloseIcon from "@mui/icons-material/Close";
const SearchedBooks = ({ toggleViewMode, close }) => {
  const contentClassName = toggleViewMode ? styles.background : styles.closed;
  return (
    <div className={contentClassName}>
      <CloseIcon onClick={close} />
      <div className={styles.Search__book__container}>
        <div className={styles.searched__books}>
          <div className={styles.searched_image__container}>
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348956234l/13465.jpg"
              alt=""
            />
          </div>
          <p>Rich dad poor dad</p>
          <p>Robert mugabe</p>
        </div>
        <div className={styles.searched__books}>
          <div className={styles.searched_image__container}>
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348956234l/13465.jpg"
              alt=""
            />
          </div>
          <p>Rich dad poor dad</p>
          <p>Robert mugabe</p>
        </div>
        <div className={styles.searched__books}>
          <div className={styles.searched_image__container}>
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348956234l/13465.jpg"
              alt=""
            />
          </div>
          <p>Rich dad poor dad</p>
          <p>Robert mugabe</p>
        </div>
        <div className={styles.searched__books}>
          <div className={styles.searched_image__container}>
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348956234l/13465.jpg"
              alt=""
            />
          </div>
          <p>Rich dad poor dad</p>
          <p>Robert mugabe</p>
        </div>
      </div>
    </div>
  );
};

export default SearchedBooks;
