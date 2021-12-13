import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41x9l0H2UGL._SX324_BO1,204,203,200_.jpg",
  title: "Homo Deus",
  author: "Yuval Noah Harari",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41SxL78DpvL._SX324_BO1,204,203,200_.jpg",
  title: "21 Lessons for the 21st Century",
  author: "Yuval Noah Harari",
};

function BookList() {
  return (
    <section className="book-list">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
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
