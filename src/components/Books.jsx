import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/features/books/booksSlice';

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
    <div className="books-container">
      <BookList booksProps={books} />
      <AddBook addBookItem={addBookItem} />
    </div>
  );
};

export default Books;