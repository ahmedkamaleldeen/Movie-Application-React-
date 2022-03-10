const INITIAL_STATE={
    movielist:[],
    moviedetails:{},
    favotrates:[],
    

}
export default function movielist(state=INITIAL_STATE,action){
    switch(action.type){

        case 'GET_MOVIE_LIST':
            return{
                ...state,
                movielist:action.payload
            }
            case 'GET_MOVIE_LIST_DETAILS':
            return{
                ...state,
                moviedetails:action.payload
            }
            case 'GET_MOVIE_LIST_LANG':
            return{
                ...state,
                movielist:action.payload
            }
            case 'GET_MOVIE_LIST_PAGE_NUMBER':
            return{
                ...state,
                movielist:action.payload
            }
            case 'GET_MOVIE_LIST_BY_NAME':
            return{
                ...state,
                movielist:action.payload
            }
            case 'GET_MOVIE_FAVO':
            return{
                ...state,
                favotrates:[...state.favotrates, action.payload]
            }
            case 'REMOVE_FAVO':
            return{
                ...state,
                favotrates:state.favotrates.filter((movie)=>movie.id!==action.payload.id)
            }

            default:
                return state
    }

}