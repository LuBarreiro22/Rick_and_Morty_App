import { useState } from 'react';
import styles from './SearchBar.module.css'


export default function SearchBar(props) {
   const {onSearch} = props;
   const [character,setCharacter] = useState('');

   const handleChange = (e) =>{
      setCharacter(e.target.value)
   }

   return (
      <div className={styles.containerSearch}>
         <input className={styles.SearchBar} type='search' value={character} placeholder='Agrega un personaje por su ID...' onChange={handleChange}/>
      <button className={styles.button} onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
