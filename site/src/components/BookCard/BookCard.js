import React from "react";
import api, { Book } from "../../api";

/**
 *
 * @param {object} Props
 * @param {Book} Props.book
 * @param {boolean} Props.save
 */
const BookCard = ({ book, saver, refresh }) => {
  const [open, setOpen] = React.useState(false);

  const openPage = () => window.open(book.link, "_blank");

  const save = () => api.save(book);
  const unsave = () => api.delete(book).then(refresh);

  let desc = book.description ? book.description.substr(0, 60) : "";
  if (desc) {
    desc = desc.length < book.description.length ? desc + "..." : desc;
  }

  return (
    <div className="book-card" onClick={() => setOpen(!open)}>
      <header>
        <h3>{book.title}</h3>
      </header>
      <main>
        <img src={book.image} alt={book.title} />
      </main>
      <footer>
        <div>{desc}</div>
        <div>By {book.authors.reduce((acc, curr) => acc + ", " + curr)}</div>
      </footer>

      <section className={`buttons${open ? " open" : ""}`}>
        {saver ? (
          <button className="save" onClick={save}>
            Save
          </button>
        ) : (
          <button className="delete" onClick={unsave}>
            Delete
          </button>
        )}
        <button className="info" onClick={openPage}>
          More Info
        </button>
      </section>
    </div>
  );
};

export default BookCard;
