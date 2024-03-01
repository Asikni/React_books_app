import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title); // title has default value of book title which we can change

  const handleChange = (event) => {
    //when user changes the value in the input, the eventhandler receives that event and uses that
    setTitle(event.target.value); //to change/update the value of the title
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //remember that form submition thing

    onSubmit(book.id, title);
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary"> Save </button>
    </form>
  );
} //when user edits the book it opens up a form and we need to type something in the input in order to update the form
//and remember in input we have to keep track of the changes...right and for that we need to follow those 5 steps

export default BookEdit;
