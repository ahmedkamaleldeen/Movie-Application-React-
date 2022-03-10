import axios from "axios";
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
export const getmovielistfavo = (id) => (dispatch) => {
  // const {lang}=useContext(LanguageContext);
  // const {lang,setlang}=useContext(LanguageContext);

  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a4e96a382bba7d6d48416998e9a084dc`
    )
    .then((res) =>{
    console.log(res.data);
    dispatch({
      type:"GET_MOVIE_FAVO",
      payload:res.data
    })})
    .catch((err) => {
      console.log(err);
    });
};
export const removeFromFavo = (id) => (dispatch) => {
  // const {lang}=useContext(LanguageContext);
  // const {lang,setlang}=useContext(LanguageContext);

  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a4e96a382bba7d6d48416998e9a084dc`
    )
    .then((res) =>{
    console.log(res.data);
    dispatch({
      type:"REMOVE_FAVO",
      payload:res.data
    })})
    .catch((err) => {
      console.log(err);
    });
};
export const getmovielistByPageNumber = (pageNumber) => (dispatch) => {
  // const {lang}=useContext(LanguageContext);
  // const {lang,setlang}=useContext(LanguageContext);

  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a4e96a382bba7d6d48416998e9a084dc&page=${pageNumber}`
    )
    .then((res) =>
    
    dispatch({
      type:"GET_MOVIE_LIST_PAGE_NUMBER",
      payload:res.data.results
    }))
    .catch((err) => {
      console.log(err);
    });
};
export const getmovielistByName = (MovieName) => (dispatch) => {
  // const {lang}=useContext(LanguageContext);
  // const {lang,setlang}=useContext(LanguageContext);

  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a4e96a382bba7d6d48416998e9a084dc&query=${MovieName}`
    )
    .then((res) =>
    
    dispatch({
      type:"GET_MOVIE_LIST_BY_NAME",
      payload:res.data.results
    }))
    .catch((err) => {
      console.log(err);
    });
};