import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card';
import styles from './Favorites.module.css'
import { filterCards,orderCards } from '../../redux/actions'

export default function Favorites() {
    const myFavorites = useSelector(state => state.myFavorites);
    const dispatch = useDispatch();
    
    function handleOrderCards (e) {
        dispatch(orderCards(e.target.value))
    }
    
    function handleFilterCards (e) {
        dispatch(filterCards(e.target.value))
    }
    
    return (
        <div>
        <div className={styles.Select}>
            <select name="order" id="" onChange={handleOrderCards}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select name="gender" id="" onChange={handleFilterCards}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
        <div className={styles.Favorites}>
            {myFavorites.map(char => <Card {...char} key={char.id}/> )}
        </div>
    </div>
  )
}
