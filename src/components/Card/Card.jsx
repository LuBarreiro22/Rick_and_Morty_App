import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFavorite,deleteFavorite } from '../../redux/actions';
import { connect,useDispatch } from 'react-redux'
import { useState } from 'react';

export  function Card(props,addFavorite,deleteFavorite) {
   const [isFav,setIsFav] = useState(false);
   const dispatch = useDispatch();

   function handleFavorite () {
      if(isFav){
         setIsFav( false)
         dispatch(deleteFavorite(props.id))
      }
      else {
         setIsFav(true)
        dispatch(addFavorite(props))
      }
   }

   return (
      <div className={styles.frontCard}>
         {isFav ? (
            <button className={styles.addFav} onClick={handleFavorite}>❤️</button>
         ) : (
            <button className={styles.delFav} onClick={handleFavorite}>🤍</button>
         )}
               <button onClick={props.onClose}>X</button>
               <Link className={styles.link} to={`/detail/${props.id}`}>
               <h2 className={styles.name}>
                  {props.name}
                  </h2>
                  </Link>

               <img src={props.image} alt="Rick Sanchez" />
            </div>
   );
}

export function mapDispatchToProps (dispatch) {
   return {
      addFavorite: function(id){
         dispatch(addFavorite(id));
      },
      deleteFavorite: function(id){
         dispatch(deleteFavorite(id));
      }
   }
}

export default connect(null, mapDispatchToProps)(Card);