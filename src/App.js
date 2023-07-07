import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Categories from './components/Categories';
import BookStore from './components/BookStore';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1 className="navbar-title">Bookstore CMS</h1>
        <ul className="navbar-list">
          <li><Link to="/" className="navbar-item">Books</Link></li>
          <li><Link to="/categories" className="navbar-item">Categories</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<BookStore />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
