import React from "react";
import { useSelector } from "react-redux";
// import { useState } from "react";
// import axios from 'axios';

function Favorates() {
  const movie1 = useSelector((state) => state.movie);
  console.log("movie", movie1);
  function deleteMovie(id) {
    movie1.filter((movie) => id === movie.id);
    // console.log(movie1);
  }
  
  return (
    <>
      <div className="container">
        <div className="row">
          {movie1.map((movie) => {
            return (
              <div className="col-4 p-5" key={movie.original_title}>
                <div className="card" style={{ width: "25rem" }}>
                  {/* <Link */}
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  />
                  {/* </Link> */}
                  <div className="card-body">
                    <h5 className="card-text">
                      <span className="text-danger">Title :</span>{" "}
                      {movie.original_title}
                    </h5>
                  </div>

                  <button
                    className="btn btn-warning"
                    onClick={() => deleteMovie(movie.id)}
                  >
                    {" "}
                    <i className="fa-solid fa-trash-can text-dark" style={{fontSize:"2em"}}></i>
                  </button>
                  {/* <i className="fa-solid fa-star text-warning text-center" style={{fontSize:"2.5em"}} onClick={() => saveMovie(movie.id)}></i> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Favorates;
