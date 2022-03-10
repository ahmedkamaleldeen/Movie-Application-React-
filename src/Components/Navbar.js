import axios from 'axios'
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getmovielistlanguage } from '../actions/movielist'
import { LanguageContext } from '../context/language'
import './style.css'
function Navbar() {  

  const {lang,setlang}=useContext(LanguageContext);
  const dispatch=useDispatch();
   function changeLanguage(){
     setlang(lang==='ar'?"en":"ar");
    dispatch(getmovielistlanguage(lang));
   }


  return (
    // <nav  style={{backgroundColor:"black"}}>
  <div className="container-fluid d-flex justify-content-around " style={{backgroundColor:"black"}} >
    <Link className='style' style={{fontSize:"3.5em",textDecoration:"none",fontWeight:"900"}} to={'/movielist'}>MovieList</Link>
    <Link className='style' style={{fontSize:"3.5em",textDecoration:"none",fontWeight:"900"}} to={'/favorates'}>Favourites</Link>
    <button className='btn btn-danger m-3' style={{fontSize:"2.5em",textDecoration:"none",fontWeight:"900"}} onClick ={()=>changeLanguage()}>ChangeLanguage</button>

  </div>

  )
}

export default Navbar