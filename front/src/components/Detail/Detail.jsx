import React, {useState,useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import styles from './Detail.module.css'


export default function Detail () {
    const {detailId} = useParams();
    const [character,setCharacter] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

     const handleClick = () =>{
        navigate('/home');
     }

  return (
    <div className={styles.container}>
        <button className={styles.button} onClick={handleClick}>Go Home</button>
        {character ? (
            <div className={styles.info}>
                <h1>{character.name}</h1>
                <h5>Status: {character.status}</h5>
                <h5>Specie: {character.species}</h5>
                <h5>Gender: {character.gender}</h5>
                <h5>Origin: {character.origin?.name}</h5>
            <div >
                <img className={styles.img} src={character.image} alt={character.name} />
            </div>
        </div>
        ): ('')}
    </div>
  )
}
