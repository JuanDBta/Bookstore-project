import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';
import AddBook from './AddBook';

const BookstoreLogic = () => {
  const [books, setBooks] = useState([
    {
      id: uuidv4(),
      title: 'Delirio',
      author: 'Laura Restrepo',
      category: 'drama',
      status: '60%',
      current_chapter: '17',
    },
    {
      id: uuidv4(),
      title: 'Sin Remedio',
      author: 'Antonio Caballero',
      category: 'fiction',
      status: '30%',
      current_chapter: '5',
    },
  ]);

  const addBookItem = (title, author, category) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
      status: '40%',
      current_chapter: '6',
    };
    setBooks([...books, newBook]);
  };

  return (
    <div className="books-container">
      <BookList booksProps={books} />
      <AddBook addBookItem={addBookItem} />
    </div>
  );
};

export default BookstoreLogic;
