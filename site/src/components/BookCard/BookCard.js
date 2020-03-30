import React from "react";
import { Book } from "../../api";

/**
 *
 * @param {object} Props
 * @param {Book} Props.book
 */
const BookCard = ({ book }) => {
  const [open, setOpen] = React.useState(false);

  const openPage = () => window.open(book.link, "_blank");

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
        <button className="save">Save</button>
        <button className="info" onClick={openPage}>
          More Info
        </button>
      </section>
    </div>
  );
};

export default BookCard;
