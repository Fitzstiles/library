import styles from "../componet/Book.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const BookDetails = ({ toggleDetailsPage, close, bookData }) => {
  const [liked, setliked] = useState(false);
  const contentClassName = toggleDetailsPage
    ? styles.open__modal
    : styles.closed;
  const bookimg =
    bookData?.volumeInfo?.imageLinks &&
    bookData?.volumeInfo?.imageLinks?.smallThumbnail;
  const author = bookData?.volumeInfo.authors;
  console.log(bookData);
  return (
    <div className={contentClassName}>
      <div className={styles.navigation}>
        <KeyboardBackspaceIcon onClick={close} />
        <div onClick={() => setliked(!liked)}>
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
      </div>
      <div className={styles.book__info}>
        <div className={styles.book__details__header}>
          <div>
            <p>The greay Gatsby</p>
            <p>F.Kenedddy Fitzgerald</p>
            <p>$16.99</p>
          </div>
          <div className={styles.book__details__image}>
            <img src={bookimg} alt="" />
          </div>
        </div>
        <div className={styles.paragraph}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            culpa numquam nobis ipsum repellat rem dolores aut debitis, nam
            sint, excepturi, molestiae cum fuga voluptatibus possimus omnis
            optio qui saepe! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nam eum numquam cumque odio laudantium architecto esse!
            Dolorum quos temporibus, quae sapiente qui pariatur quisquam
            suscipit quibusdam commodi aspernatur dolor nostrum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
