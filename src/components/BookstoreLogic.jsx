import React from 'react';
import BookList from './BookList';
import Addbook from './AddBook';

const BooksLogic = () => {
  const books = [
    {
      id: 1,
      title: 'Delirio',
      author: 'Laura Restrepo',
      category: 'drama',
      status: '60%',
      current_chapter: '17',
    },
    {
      id: 2,
      title: 'Sin Remedio',
      author: 'Antonio Caballero',
      category: 'fiction',
      status: '30%',
      current_chapter: '5',
    },
    {
      id: 3,
      title: 'Historia del Arte',
      author: 'Ernst Gombrich',
      category: 'history',
      status: '80%',
      current_chapter: '27',
    },
  ];

  return (
    <div className="books-container">
      <BookList booksProps={books} />
      <Addbook />
    </div>
  );
};

export default BooksLogic;
