import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data); //does this mean books will get displayed??
  };
  //Dont do fetchBooks() alone as it will cause rerendering of the function. and we want the to execute fetchBooks only on reload
  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        ///if book's id is same as id we want to update then
        return { ...book, ...response.data }; //get rest of details of that book plus change the title
      }
      return book; //else if we are mapping over some other book then return that book
    });
    setBooks(updatedBooks);
  };

  //print what deleteBookId gives out
  const deleteBookById =async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  }; // to delete an object from array we use filter function & we want return a falsey value

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div> //so we are passing books list to variable books which then goes to BookList function so as to display title of that book
  );
}

export default App;
