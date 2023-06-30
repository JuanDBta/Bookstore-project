import React from 'react';

const AddBook = () => (
  <div className="input">
    <div className="add-book-label">ADD NEW BOOK</div>
    <input className="add-book" type="text" name="addbook" placeholder="Add book title..." />
    <input className="author-box" type="text" name="author" placeholder="Add author..." />
    <input className="category-box" type="text" name="category" placeholder="Add category..." />
    <button className="add-book-button" type="submit">ADD BOOK</button>
  </div>
);

export default AddBook;
