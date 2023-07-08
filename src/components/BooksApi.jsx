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

  const statusCircle = {
    '--p': '80',
    '--b': '5px',
    '--c': '#0290ff',
  };

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

      <ul className="booklist">
        {books.map((book) => (
          <div key={book.item_id} className="book-item">
            <div className="book-element1">
              <div className="book-description">
                <li className="book-category">{book.category}</li>
                <li className="book-title">{book.title}</li>
                <li className="book-author">{book.author}</li>
              </div>
              <div className="book-buttons">
                <button type="button" className="comment-button">Comment</button>
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => handleDeleteBook(book.item_id)}
                >
                  Remove
                </button>
                <button type="button" className="edit-button">Edit</button>
              </div>
            </div>

            <div className="book-element2">
              <li className="book-status">
                <div className="circle" style={statusCircle} />
                <div className="status-description">
                  <h3 className="porcentage">64%</h3>
                  <p className="status">Completed</p>
                </div>
              </li>
            </div>

            <div className="book-element3">
              <li className="current-chapter">CURRENT CHAPTER</li>
              <li className="book-chapter">Chapter 7</li>
              <button type="button" className="update-button">UPDATE PROGRESS</button>
            </div>
          </div>
        ))}
      </ul>

      <h3 className="form-title">ADD NEW BOOK</h3>
      <form className="add-book-form">
        <input
          className="input-title"
          type="text"
          value={title}
          placeholder="Book title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input-author"
          type="text"
          value={author}
          placeholder="Book author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className="input-category"
          type="text"
          value={category}
          placeholder="Book category "
          onChange={(e) => setCategory(e.target.value)}
        />
        <button className="add-book-button" type="button" onClick={handleAddBook}>
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default Books;
