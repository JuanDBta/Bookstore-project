// Books.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../redux/features/books/booksSlice';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleAddBook = () => {
    const newBook = {
      itemId: uuidv4(),
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
          <div key={book.itemId} className="book-item">
            <li className="book-category">{book.category}</li>
            <li className="book-title">{book.title}</li>
            <li className="book-author">{book.author}</li>
            <div className="book-buttons">
              <button
                type="button"
                className="delete-button"
                onClick={() => handleDeleteBook(book.itemId)}
              >
                Delete
              </button>
              <button type="button" className="comment-button">Comment</button>
              <button type="button" className="edit-button">Edit</button>
            </div>
            <li className="book-status">
              {book.status}
              {' '}
              Completed
            </li>
            <li className="current-chapter">CURRENT CHAPTER</li>
            <li className="book-chapter">{book.current_chapter}</li>
            <button type="button" className="update-button">UPDATE PROGRESS</button>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Books;
