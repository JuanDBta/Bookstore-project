import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';
import Categories from './components/Categories';
import BookStore from './components/BookStore';
import './App.css';

function App() {
  return (
    <Router>
      <div className="main-container">
        <nav className="navbar">
          <h1 className="navbar-title">Bookstore CMS</h1>
          <ul className="navbar-list">
            <li><Link to="/" className="navbar-item">BOOKS</Link></li>
            <li><Link to="/categories" className="navbar-item">CATEGORIES</Link></li>
          </ul>
          <RxAvatar className="nav-icon" />
        </nav>
        <Routes>
          <Route path="/" element={<BookStore />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
