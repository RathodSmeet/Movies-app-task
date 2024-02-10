import React from 'react';
import SearchBar from './SearchBar';
import './Header.css'; // Import the CSS file

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="logo">SR Movies</div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default Header;
