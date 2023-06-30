import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ itemProp }) => (
  <div key={itemProp.id} className="book-item">
    <li className="book-category">{itemProp.category}</li>
    <li className="book-title">{itemProp.title}</li>
    <li className="book-author">{itemProp.author}</li>
    <div className="book-buttons">
      <button type="button" className="comment-button">Comment</button>
      <button type="button" className="delete-button">Delete</button>
      <button type="button" className="edit-button">Edit</button>
    </div>
    <li className="book-status">
      {itemProp.status}
      {' '}
      Completed
    </li>
    <li className="current-chapter">CURRENT CHAPTER</li>
    <li className="book-chapter">{itemProp.current_chapter}</li>
    <button type="button" className="update-button">UPDATE PROGRESS</button>
  </div>
);

BookItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    current_chapter: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
