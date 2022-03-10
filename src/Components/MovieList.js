import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFevorate } from "../Redux/action";
import { useParams } from "react-router-dom";
import {
  getmovielist,
  getmovielistByName,
  getmovielistByPageNumber,
  getmovielistdetails,
  getmovielistfavo,
  getmovielistlanguage,
} from "../actions/movielist";
import { LanguageContext } from "../context/language";
import { PageNumber } from "../context/PageNumber";
import { Search, SearchMovie } from "../context/Search";
// import {useSelector} from 'react-'
// import userEvent from "@testing-library/user-event";

function MovieList() {
  // const param = useParams();
  // console.log(`param is ${param.id} `);
  // const movie = useSelector((state) => state.movie);
  const movie1 = useSelector((state) => state.movielist.movielist);
  const { pageNumber, setpageNumber } = useContext(PageNumber);
  const {search,setSearch}=useContext(SearchMovie);
  const [movie, setData] = useState({
    name: "",
    
  });

  // console.log(movie)
  const dispatch = useDispatch();
  // const [movielist, setMovielist] = useState([]);
  const [moviecard, setMovie] = useState();
  const { lang } = useContext(LanguageContext);
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
  function Previous() {
    setpageNumber(pageNumber <= 0 ? 1 : pageNumber - 1);
        // setpageNumber(pageNumber - 1);

    dispatch(getmovielistByPageNumber(pageNumber));
  }
  function Next() {
    setpageNumber(pageNumber <= 0 ? 1 : pageNumber + 1);
        // setpageNumber(pageNumber + 1);

    dispatch(getmovielistByPageNumber(pageNumber));
  }
  function validation(e){
    if(e.target.id==="search-input")
    // setData({...movie,name:e.target.value});
    setSearch(setData({...movie,name:e.target.value}));
  }
  function searchMovie(){
    // setSearch({name:e.terget.value});
    dispatch(getmovielistByName(search));
    
  }
  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      {/* <div>{movie}</div> */}
      <div className="input-group d-flex justify-content-center ">
        <div className="form-outline col-7 ">
          <input
            id="search-input"
            type="text"
            className="form-control"
            value={movie.name}
            onChange={(e) => validation(e)}
          />
        </div>
        <button id="search-button" type="button" className="btn btn-danger" onClick={()=>searchMovie()}>
          <i className="fas fa-search"></i>
        </button>
      </div>
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
                    style={{height:"500px"}}
                  />
                </Link>
                {/* <div className="card-body">
                  <h5 className="card-text">
                    <span className="text-danger">MovieName :</span>{" "}
                    {movie.original_title}
                  </h5> */}
                  {/* <h5 className="card-text">
                    <span className="text-danger">Title :</span>{" "}
                    {movie.overview}
                  </h5> */}
                {/* </div> */}
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
      <nav aria-label="Page navigation example">
        <div className="d-flex justify-content-center">
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link" onClick={() => Previous()}>
                Previous
              </button>
            </li>
            <li className="page-item">
              <button className="page-link">1</button>
            </li>
            <li className="page-item">
              <button className="page-link">2</button>
            </li>
            <li className="page-item">
              <button className="page-link">3</button>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={() => Next()}>
                Next
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <section class="">
        <footer class="text-center text-white bg-dark">
          <div class="container p-4 pb-0">
            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3">Register for free</span>
                <button type="button" class="btn btn-outline-light btn-rounded">
                  Sign up!
                </button>
              </p>
            </section>
          </div>
          <div
            class="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <a class="text-white" href="https://NETflix.com/">
              NETflix.com
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}
export default MovieList;
