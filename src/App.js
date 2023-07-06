import React from 'react';
import {
  createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet,
} from 'react-router-dom';
import Categories from './components/Categories';
import BookStore from './components/BookStore';
import './App.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/bookstore" element={<BookStore />} />
        <Route path="/categories" element={<Categories />} />
      </Route>,
    ),
  );
  return (
    <div className="body">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => (
  <>
    <nav className="navbar">
      <h1 className="navbar-title">Bookstore CMS</h1>
      <ul className="navbar-list">
        <li><Link to="/bookstore" className="navbar-item">Books</Link></li>
        <li><Link to="/categories" className="navbar-item">Categories</Link></li>
      </ul>
    </nav>
    <div>
      <Outlet />
    </div>
  </>
);

export default App;
