import React from "react";
import { useSelector } from "react-redux";
// import { useState } from "react";

function Favorates() {
  const movie = useSelector((state) => state);
  console.log(` the movie ${movie}` );

  return (
    // {movie.map((movie) => {
    //     return (
    //       // </Link>
    //       <div className="col-4 p-5" key={movie.original_title}>
    //         <div className="card" style={{ width: "25rem" }}>
    //           <Link
    //             style={{ textDecoration: "none" }}
    //             to={`/movie-details/${movie.id}`}
                
    //           >
    //             <img
    //               src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    //               className="card-img-top"
    //               alt="..."
    //             />
    //           </Link>
    //           <div className="card-body">
    //             <h5 className="card-text">
    //               <span className="text-danger">Title :</span>{" "}
    //               {movie.original_title}
    //             </h5>
    //           </div>
    //           <Link to="/favorates" className="btn btn-warning" onClick={() => saveMovie()}  > Add to Favorates</Link>
    //         </div>
    //       </div>
    //     );
    //   })}
    <>
       <h1> Movie id:{movie.id}</h1> 
    </>
  );
}

export default Favorates;
