import React from 'react';
import Link from 'next/link';
import styles from './layout.module.css';
import SearchBar from "../components/SearchBar.js";

const Navbar = () => {
  const handleSearch = (searchTerm) => {
    // Implement your search logic here
    // For simplicity, we'll just log the search term for now
    console.log("Search term:", searchTerm);
  };

  return (
    <nav className="navbar">
      <div className="navbar-link">
        <Link className={styles.navlinkbig} href="/">
          NT News
        </Link>
      </div>
      <ul className="navbar-links">
        <div className="navbar-link">
          <Link className={styles.navlink} href="/">
            Home
          </Link>
        </div>
        <div className="navbar-link">
          <Link className={styles.navlink} href="/">
            Contact
          </Link>
        </div>
        <SearchBar onSearch={handleSearch} />
      </ul>
    </nav>
  );
};

export default Navbar;