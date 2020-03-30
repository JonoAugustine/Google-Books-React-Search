import React from "react";
import api from "../api";
import { Link } from "react-router-dom";
import { BookCard } from "../components";
import Navbar from "../components/Navbar";

const Saved = () => {
  const [books, setBooks] = React.useState([]);

  const refresh = () => api.getSaved().then(setBooks);

  React.useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="page saved">
      <Navbar>
        <Link to="/">Search</Link>
      </Navbar>
      <div className="books">
        {books.map(b => (
          <BookCard book={b} key={b.id} refresh={refresh} />
        ))}
      </div>
    </div>
  );
};

export default Saved;
