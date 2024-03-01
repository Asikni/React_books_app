import { useState } from "react"; //whenever we want to change or use the state
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id); //when user clicks on x button, deletebookbyid function is c alled and that book gets deleted
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit); //showEdit is false at first and now becomes true when we click the edit button
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false); //when form is clicked for saving that form we make it false so that we display on the form title, if true display the edit form
    onEdit(id, newTitle);
  };
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    //if true then open edit option else show title of book
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }
  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
} //take the book component from booklist and display the title on the screen

export default BookShow;
