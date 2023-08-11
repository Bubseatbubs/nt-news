import React from 'react';
import Link from 'next/link';
import styles from './layout.module.css';

const Navbar = () => {

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
          <Link className={styles.navlink} href="/about">
            About
          </Link>
        </div>
        <div className="navbar-link">
          <Link className={styles.navlink} target="_blank" href="https://forms.gle/6Q8ALi87qrF2hpeM7">
            Contact
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;