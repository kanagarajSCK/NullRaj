import React from 'react';
import styles from '../styles/components/nav.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <h1>🔐 CTF Portal</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/challenge">Challenge</Link>
        <Link to="/submit">Submit Flag</Link>
      </div>
    </nav>
  );
}
