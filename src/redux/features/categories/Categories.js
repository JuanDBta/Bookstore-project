import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from './categoriesSlice';

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkStatus());
  }, [dispatch]);

  return (
    <section>
      <h3>Categories</h3>
      <p>{categories[0]}</p>
    </section>
  );
};

export default Categories;
