import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ addBookItem }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && category) {
      addBookItem(title, author, category);
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <form className="add-book-form" onSubmit={handleSubmit}>
      <h3>ADD NEW BOOK</h3>
      <div>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

AddBook.propTypes = {
  addBookItem: PropTypes.func.isRequired,
};

export default AddBook;
