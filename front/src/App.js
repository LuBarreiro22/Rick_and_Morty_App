import Header from './components/Header/Header';
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav';
import { useState,useEffect } from 'react';
import { Routes,Route,useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

 export default function App () {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters,setCharacters] = useState([]);
   const [access,setAccess] = useState(false);
   const username = 'blucasmartin@gmail.com';
   const password = 'lucas123';

    function login(userData){
      if(userData.password === password && userData.username === username){
         setAccess(true);
         navigate('/home');
      }
      else{
         alert('Usuario o contraseña incorrecta');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (character) =>{
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      setCharacters([...characters])
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== id))
   }

  return <div className='App'>
            {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
               <Header/>
            <Routes>
               <Route path='/' element={<Form login={login} />} />
               <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}
               />
               <Route path='/about' element={<About/>}/>
               <Route path='/favorites' element={<Favorites/>}/>
               <Route path='/detail/:detailId' element={<Detail/>}/>
            </Routes>
         </div>
}
