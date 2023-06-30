import React from 'react';
import Addbook from './AddBook'

const BooksLogic = () => {
  const books = [
    {
      id: 1,
      title: 'Delirio',
      author: 'Laura Restrepo',
      genre: 'drama',
      status: '60%',
      current_chapter: '17',
    },
    {
      id: 2,
      title: 'Sin Remedio',
      author: 'Antonio Caballero',
      genre: 'fiction',
      status: '30%',
      current_chapter: '5',
    },
    {
      id: 3,
      title: 'Historia del Arte',
      author: 'Ernst Gombrich',
      genre: 'history',
      status: '80%',
      current_chapter: '27',
    },
  ];

  return (
    <ul className="booklist">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <li className="book-genre">{book.genre}</li>
          <li className="book-title">{book.title}</li>
          <li className="book-author">{book.author}</li>
          <li className="book-status">{book.status} Completed</li>
          <li className="current-chapter">CURRENT CHAPTER</li>
          <li className="book-chapter">{book.current_chapter}</li>
        </div>
      ))}
      {<Addbook />}
    </ul>
  );
};

export default BooksLogic;
