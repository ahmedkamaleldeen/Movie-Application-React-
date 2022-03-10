import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getmovielistdetails } from "../actions/movielist";
function Moviedetails() {
  const param = useParams();
  // const [moviedetails,setMoviedetails]=useState({});
  const moviedetails = useSelector((state) => state.movielist.moviedetails);
  console.log(`param is ${param.id} `);
  const dispatch = useDispatch();
  useEffect(() => {
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/movie/${param.id}?api_key=a4e96a382bba7d6d48416998e9a084dc`
    //   )
    //   .then((res) => {
    //     // console.log(res.data);
    //     setMoviedetails(res.data);

    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    dispatch(getmovielistdetails(param.id));
  }, []);

  return (
    <>
      <div
        className="card text-white p-3 "
        style={{ backgroundColor: "black" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${moviedetails.poster_path}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div
              className="card-body d-flex justify-content-center flex-column align-items-center"
              style={{ height: "400px" }}
            >
              <h1 className="card-title">{moviedetails.original_title}</h1>
              <h3 className="card-text">{moviedetails.overview}</h3>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
}

export default Moviedetails;
