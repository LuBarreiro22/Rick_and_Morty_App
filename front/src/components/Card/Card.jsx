import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFavorite,deleteFavorite } from '../../redux/actions';
import { connect,useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react';
import reducer from '../../redux/reducer';

export default function Card(props) {
   const [isFav,setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);

   function handleFavorite () {
      if(isFav){
         setIsFav(false)
        dispatch(deleteFavorite(props.id))
      }
      else {
         setIsFav(true)
       dispatch(addFavorite(props))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.frontCard}>
         {isFav ? (
            <button className={styles.btnAddFav} onClick={handleFavorite}>❤️</button>
         ) : (
            <button className={styles.btnDelFav} onClick={handleFavorite}>🤍</button>
         )}
               <button className={styles.btnX} onClick={props.onClose}>X</button>
               <Link className={styles.link} to={`/detail/${props.id}`}>
               <h2 className={styles.name}>{props.name}</h2>
               </Link>
               <h2 className={styles.gender}>{props.gender}</h2>
               <h2 className={styles.species}>{props.species}</h2>

               <img src={props.image} alt="Rick Sanchez" />
            </div>
   );
}

// export function mapDispatchToProps (dispatch) {
//    return {
//       addFavorite: function(personaje){
//          dispatch(addFavorite(personaje));
//       },
//       deleteFavorite: function(id){
//          dispatch(deleteFavorite(id));
//       }
//    }
// }

// export function mapStateToProps ({myFavorites}) {
//    reducer(myFavorites)
// }

// export default connect(null, mapDispatchToProps)(Card);