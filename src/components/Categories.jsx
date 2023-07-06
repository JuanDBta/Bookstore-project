import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/features/categories/categoriesSlice';

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkStatus());
  }, [dispatch]);

  return (

    <div className="home">
      <h2>Welcome to Categories page!</h2>
      <p className="cat-description">{categories[0]}</p>
    </div>
  );
};
export default Categories;
