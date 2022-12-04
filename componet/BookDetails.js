import styles from "../componet/Book.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import Link from "next/link";

const BookDetails = ({ toggleDetailsPage, close, bookData }) => {
  const [liked, setliked] = useState(false);
  const booksDetailsClassName = toggleDetailsPage
    ? `${styles.open__modal} && ${styles.active}`
    : styles.open__modal;
  const bookimg =
    bookData?.volumeInfo?.imageLinks &&
    bookData?.volumeInfo?.imageLinks?.smallThumbnail;
  const author = bookData?.volumeInfo.authors;
  console.log(bookData);
  return (
    <div className={booksDetailsClassName}>
      <div className={styles.navigation}>
        <KeyboardBackspaceIcon onClick={close} />
        <div onClick={() => setliked(!liked)}>
          {liked ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </div>
      </div>
      <div className={styles.book__info}>
        <div className={styles.book__details__header}>
          <div>
            <p>{bookData?.volumeInfo.title}</p>
            <p>{author}</p>
            <p>{bookData?.saleInfo.listPrice}</p>
            <p>Published: {bookData?.volumeInfo.publishedDate}</p>
            <Link href={`${bookData?.volumeInfo.previewLink}`} target="blank">
              Click for more Details
            </Link>
          </div>
          <div className={styles.book__details__image}>
            <img src={bookimg} alt="" />
          </div>
        </div>
        <div className={styles.paragraph}>
          <p>{bookData?.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
