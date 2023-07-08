import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks, deleteBook, getBooks } from '../redux/features/books/booksApiSlice';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const addNew = useSelector((state) => state.books.addNew);
  const deleted = useSelector((state) => state.books.deleted);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  useEffect(() => {
    if (addNew) {
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  }, [addNew]);

  useEffect(() => {
    if (deleted) {
      dispatch(getBooks());
    }
  }, [deleted, dispatch]);

  const handleAddBook = async () => {
    try {
      const newBook = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };

      const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qiKtD5mkwRN26fLwBUzY/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });
      window.location.reload();
      if (response.ok) {
        dispatch(addBooks());
      } else {
        throw new Error('Failed to add book');
      }
    } catch (error) {
      console.log(error);// eslint-disable-line
    }
  };

  const handleDeleteBook = (item_id) => {// eslint-disable-line
    dispatch(deleteBook(item_id))
      .unwrap()
      .catch((error) => {
        console.log(error);// eslint-disable-line
      });
  };

  return (
    <section className="books-container">
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
      <button type="button" onClick={handleAddBook}>
        ADD NEW BOOK
      </button>
      <p className="number-books">
        Number of Books: (
        {books.length}
        )
      </p>
      <ul className="booklist">
        {books.map((book) => (
          <div key={book.item_id} className="book-item">
            <li className="book-category">{book.category}</li>
            <li className="book-title">{book.title}</li>
            <li className="book-author">{book.author}</li>
            <div className="book-buttons">
              <button
                type="button"
                className="delete-button"
                onClick={() => handleDeleteBook(book.item_id)}
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
