import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFevorate } from "../Redux/action";
import { useParams } from "react-router-dom";
import{getmovielist, getmovielistdetails, getmovielistfavo, getmovielistlanguage} from '../actions/movielist'
import { LanguageContext } from "../context/language";
// import {useSelector} from 'react-'
// import userEvent from "@testing-library/user-event";

function MovieList() {
  // const param = useParams();
  // console.log(`param is ${param.id} `);
  // const movie = useSelector((state) => state.movie);
  const movie1 = useSelector((state) => state.movielist.movielist);
  
  // console.log(movie)
  const dispatch = useDispatch();
  // const [movielist, setMovielist] = useState([]);
  const [moviecard, setMovie] = useState();
  const {lang} =useContext(LanguageContext);
  useEffect(() => {

    // axios
    //   .get(
    //     "https://api.themoviedb.org/3/movie/popular?api_key=a4e96a382bba7d6d48416998e9a084dc"
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     setMovielist(res.data.results);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    dispatch(getmovielistlanguage(lang));
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/movie/${param.id}?api_key=a4e96a382bba7d6d48416998e9a084dc`
    //   )
    //   .then((res) => {
    //     console.log(res.data)
    //     setMovie(res.data);

    //   });
  }, []);
  // const [moviedetails,setMovie]=useState([]);
  function saveMovie(id) {
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/movie/${id}?api_key=a4e96a382bba7d6d48416998e9a084dc`
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     setMovie(res.data);
    //     dispatch(addFevorate(res.data));
    //   });
    // // e.target.style.color="yellow"

    // console.log(`moviecard: ${moviecard}`)

    // console.log(id)
    dispatch(getmovielistfavo(id));
    
  }
  return (
    <div className="container-fluid" style={{backgroundColor:"black"}}>
      {/* <div>{movie}</div> */}
      <div className="row">
        {movie1.map((movie) => {
          return (
            // </Link>
            <div className="col-3 p-5" key={movie.original_title}>
              <div className="card" style={{ width: "25rem" }}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/movie-details/${movie.id}`}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-text">
                    <span className="text-danger">Title :</span>{" "}
                    {movie.original_title}
                  </h5>
                  {/* <h5 className="card-text">
                    <span className="text-danger">Title :</span>{" "}
                    {movie.overview}
                  </h5> */}
                </div>
                {/* <button className="btn btn-warning" onClick={() => saveMovie(movie.id)}  > Add to Favorates</button> */}
                <button
                  className="btn btn-danger"
                  style={{ fontSize: "2.5em" }}
                  onClick={() => saveMovie(movie.id)}
                >
                  {" "}
                  <i
                    className="fa-solid fa-star text-dark text-center"
                    id="styles"
                  ></i>
                  {movie.vote_average}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MovieList;
