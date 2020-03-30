import React from "react";
import { Link } from "react-router-dom";
import { TextInput, BookCard } from "../components";
import api from "../api";
import Navbar from "../components/Navbar";

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
      <Navbar>
        <Link to="/saved">My Books</Link>
      </Navbar>
      <form onSubmit={handleSubmit}>
        <TextInput name="search" />
        <button type="submit">Go</button>
      </form>
      <section className="results">
        {books.map(b => (
          <BookCard key={b.id} book={b} saver />
        ))}
      </section>
    </div>
  );
};

export default Search;
