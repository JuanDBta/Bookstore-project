import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    {
      itemId: uuidv4(),
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      itemId: uuidv4(),
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      itemId: uuidv4(),
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        itemId: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      state.books = [...state.books, newBook];
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.itemId !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
