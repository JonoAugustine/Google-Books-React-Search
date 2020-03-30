import React from "react";

const Navbar = props => {
  return (
    <nav>
      <div>
        <h1>Book Search</h1>
      </div>
      <div>{props.children}</div>
    </nav>
  );
};

export default Navbar;
