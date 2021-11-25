import React from "react";
import ReactDOM from "react-dom";

// stateless functional component
// always return JSX

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return <article>this is a book</article>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
