import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from './booksSlice';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleAddBook = () => {
    const newBook = {
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
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
      <input
        type="text"
        value={author}
        placeholder="Add book author..."
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        value={category}
        placeholder="Add book category..."
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit" onClick={handleAddBook}>
        ADD NEW BOOK
      </button>
      <ul>
        {books.map((book) => (
          <li key={book.itemId}>
            <div>
              <strong>Title:</strong> {book.title}
            </div>
            <div>
              <strong>Author:</strong> {book.author}
            </div>
            <div>
              <strong>Category:</strong> {book.category}
            </div>
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
