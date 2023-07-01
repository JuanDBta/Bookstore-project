import React from 'react';

const Categories = () => {
  const info = {
    line1: 'Under construction...',
  };
  return (

    <div className="home">
      <h2>Welcome to Categories page!</h2>
      <p className="cat-description">{info.line1}</p>
    </div>
  );
};
export default Categories;
