import React from "react";
import { TextInput, BookCard } from "../components";
import api from "../api";

const Search = () => {
  const [books, setBooks] = React.useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    api.search(e.target[0].value).then(sr => {
      setBooks(sr.items);
    });
  };

  return (
    <div className="page search">
      <form onSubmit={handleSubmit}>
        <TextInput name="search" />
        <button type="submit">Go</button>
      </form>
      <section className="results">
        {books.map(b => (
          <BookCard key={b.id} book={b} />
        ))}
      </section>
    </div>
  );
};

export default Search;
