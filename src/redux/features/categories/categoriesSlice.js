import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Under Construction'],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
