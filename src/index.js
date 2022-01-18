import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="book-list">
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
