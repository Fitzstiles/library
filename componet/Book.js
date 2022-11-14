import styles from "../componet/Book.module.css";
const Book = ({ title, dataItem }) => {
  return (
    <div className={styles.book__container}>
      <h1>{title}</h1>
      <div className={styles.book__details}>
        {dataItem?.map((data) => (
          <div className={styles.book__row} key={data.id}>
            <div className={styles.image__container}>
              <img src={data.image} alt="" />
            </div>
            <p>{data.name}</p>
            <p>{data.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
