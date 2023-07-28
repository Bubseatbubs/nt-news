import React from 'react';
import Link from 'next/link';
import styles from './layout.module.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-link">
        <Link className={styles.navlink} href="/">
          NT News
        </Link>
      </div>
      <ul className="navbar-links">
        <li className="navbar-link" href="index.html">Home</li>
        <li className="navbar-link">Articles</li>
        <li className="navbar-link">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;