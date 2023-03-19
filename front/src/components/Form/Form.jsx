import React from 'react'
import styles from './Form.module.css'
import { validation } from './validation';

export default function Form(props) {
    const [userData, setUserData] = React.useState({
        username: '',
        password: '' 
        });
    const[errors,setErrors] = React.useState({
        username: '',
        password: '' 
        });

    const handleInputChange=(e) =>{
        setUserData({...userData,[e.target.name]: e.target.value
        });
        setErrors(validation({...userData,[e.target.name]: e.target.value}))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.login(userData);
    }

  return (
    <div>
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username: </label>
                <input className={styles.username} type="text" id='username' name='username' value={userData.username} onChange={handleInputChange} />
                <p className={styles.p}>{errors.username}</p>
            </div>
            <div>
                <label htmlFor='password'>Password: </label>
                <input className={styles.password} type="password" id='password' name='password' value={userData.password} onChange={handleInputChange} />
                <p className={styles.p}>{errors.password}</p>
            </div>
                <button className={styles.button}>Login: </button>
        </form>
    </div>
  )
}
