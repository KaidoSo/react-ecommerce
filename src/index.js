import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/41x9l0H2UGL.jpg",
    title: "Homo Deus",
    author: "Yuval Noah Harari",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/41SxL78DpvL.jpg",
    title: "21 Lessons for the 21st Century",
    author: "Yuval Noah Harari",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/51wH91YObNL.jpg",
    title: "The Lincoln Highway: A Novel",
    author: "Amor Towles",
  },
];

function BookList() {
  return (
    <section className="book-list">
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="booke" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
