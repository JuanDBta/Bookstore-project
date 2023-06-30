import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ booksProps }) => (
  <ul className="booklist">
    {booksProps.map((book) => (
      <BookItem key={book.id} itemProp={book} />
    ))}
  </ul>
);

BookList.propTypes = {
  booksProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      current_chapter: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
