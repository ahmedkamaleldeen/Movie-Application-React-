import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getmovielistdetails} from "../actions/movielist";
function Moviedetails() {
  const param = useParams();
  // const [moviedetails,setMoviedetails]=useState({});
  const moviedetails=useSelector(state=>state.movielist.moviedetails)
  console.log(`param is ${param.id} `);
  const dispatch=useDispatch()
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
    dispatch(getmovielistdetails(param.id))
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className=" p-5" key={moviedetails.original_title}>
          {/* <Link style={{textDecoration:"none"}} to ={`/movie-details/${movie.id}`}> */}
          <div className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${moviedetails.poster_path}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-text">
                <span className="text-danger">Title :</span>
                {moviedetails.original_title}
              </h5>
              <h5 className="card-text">
                <span className="text-danger">Details :</span>
                {moviedetails.overview}
              </h5>
            </div>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}

export default Moviedetails;
