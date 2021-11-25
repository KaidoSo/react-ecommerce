import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
const title = "21 Lessons for the 21st Century";
const author = "Yuval Noah Harari";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/41SxL78DpvL._SX324_BO1,204,203,200_.jpg";

function BookList() {
  return (
    <section className="book-list">
      <Book job="developer" />
    </section>
  );
}

const Book = (props) => {
  console.log("🚀 ~ file: index.js ~ line 20 ~ Book ~ props", props);
  return (
    <article className="book">
      <img src={img} alt="booke" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
