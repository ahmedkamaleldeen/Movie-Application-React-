import axios from "axios";
import { useContext } from "react";
import { LanguageContext } from "../context/language";

export const getmovielist = () => (dispatch) => {
  // const {lang}=useContext(LanguageContext);
  // const {lang,setlang}=useContext(LanguageContext);

  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a4e96a382bba7d6d48416998e9a084dc&page=1`
    )
    .then((res) =>
    
    dispatch({
      type:"GET_MOVIE_LIST",
      payload:res.data.results
    }))
    .catch((err) => {
      console.log(err);
    });
};
export const getmovielistdetails = (id) => (dispatch) => {
  // const {lang}=useContext(LanguageContext);
  // const {lang,setlang}=useContext(LanguageContext);

  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a4e96a382bba7d6d48416998e9a084dc`
    )
    .then((res) =>
    
    dispatch({
      type:"GET_MOVIE_LIST_DETAILS",
      payload:res.data
    }))
    .catch((err) => {
      console.log(err);
    });
};
export const getmovielistlanguage = (lang) => (dispatch) => {
  // const {lang}=useContext(LanguageContext);
  // const {lang,setlang}=useContext(LanguageContext);

  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a4e96a382bba7d6d48416998e9a084dc&page=1&language=${lang}`
    )
    .then((res) =>
    
    dispatch({
      type:"GET_MOVIE_LIST_LANG",
      payload:res.data.results
    }))
    .catch((err) => {
      console.log(err);
    });
};