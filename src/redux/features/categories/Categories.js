import React from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <section>
      <h3>Categories</h3>
      <p>{categories[0]}</p>
    </section>
  );
};

export default Categories;
