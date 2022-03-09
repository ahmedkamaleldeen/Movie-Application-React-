const INITIAL_STATE = {
  movie: [],
};
export default function language(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_MOVIE":
      console.log("in action")
      return {
        ...state,
        movie: [...state.movie, action.payload],
      };
      
    default:
      return state;
  }
}
