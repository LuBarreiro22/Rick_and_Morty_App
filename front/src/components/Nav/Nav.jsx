import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from '../Nav/Nav.module.css';
import { NavLink } from 'react-router-dom';

export default function Nav({onSearch}) {
  return (
      <div className={styles.Nav}>
          <NavLink className={styles.Home} to='/home'>Home</NavLink>
          <NavLink className={styles.About}  to='/about'>About</NavLink>
          <NavLink className={styles.Favorites} to='/favorites'>Favorites</NavLink>
          <SearchBar onSearch={onSearch}/>
      </div>
  )
}
