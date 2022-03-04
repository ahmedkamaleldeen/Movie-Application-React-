import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import userEvent from "@testing-library/user-event";

function MovieList() {
  const [movielist, setMovielist] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=a4e96a382bba7d6d48416998e9a084dc"
      )
      .then((res) => {
        console.log(res.data);
        setMovielist(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {movielist.map((movie) => {
          return (
            // </Link>
            <div className="col-4 p-5" key={movie.original_title}>
              <Link style={{textDecoration:"none"}} to ={`/movie-details/${movie.id}`}>
                <div className="card" style={{ width: "25rem" }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-text">
                      <span className="text-danger">Title :</span>{" "}
                      {movie.original_title}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MovieList;
