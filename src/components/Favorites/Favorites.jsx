import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card';
import styles from './Favorites.module.css'

export default function Favorites(props) {
    const myFavorites = useSelector(state => state.myFavorites);
  return (
    <div className={styles.Favorites}>
        {myFavorites.map(char => <Card {...char} key={char.id}/> )}
    </div>
  )
}
