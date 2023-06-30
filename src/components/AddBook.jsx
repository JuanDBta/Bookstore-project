import React from 'react';

const AddBook = () => {
  return (
    <div className="input">
      <label className="add-book-label">ADD NEW BOOK</label>
      <input className="add-book" type="text" name="addbook" placeholder="Add book title..." />
      <input className="author-box" type="text" name="author" placeholder="Add author..." />
      <button className="add-book-button" type="submit">ADD BOOK</button>
    </div>
  );
};

export default AddBook;
