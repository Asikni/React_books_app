import BookShow from "./BookShow";
import BooksContext from "../context/books";
import { useContext } from "react";

function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext); //create context in usecontext

  const renderedBooks = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} key={book.id} book={book} onEdit={onEdit} />
    );
  });

  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>Increment</button>
      {renderedBooks}
    </div>
  );
}

export default BookList;
