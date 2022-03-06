const INITIAL_STATE={
    movielist:[],
    moviedetails:{},
    language:""

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
                // language:action.payload,
                movielist:action.payload
            }

            default:
                return state
    }

}