import axios from "axios";

export const getmovielist = () => (dispatch) => {
  return axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=a4e96a382bba7d6d48416998e9a084dc"
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
