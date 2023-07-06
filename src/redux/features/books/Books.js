import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from './booksSlice';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleAddBook = () => {
    const newBook = {
      itemId: books.length,
      title,
    };
    dispatch(addBook(newBook));
    setTitle('');
  };

  const handleDeleteBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <section>
      <h3>Books</h3>
      <p>
        Number of Books:
        {books.length}
      </p>
      <input
        type="text"
        value={title}
        placeholder="Add book title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="button" onClick={handleAddBook}>
        ADD NEW BOOK
      </button>
      <ul>
        {books.map((book) => (
          <li key={book.itemId}>
            {book.title}
            <button type="button" onClick={() => handleDeleteBook(book.itemId)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Books;
