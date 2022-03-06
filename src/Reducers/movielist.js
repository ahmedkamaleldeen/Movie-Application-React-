const INITIAL_STATE={
    movielist:[]
}
export default function movielist(state=INITIAL_STATE,action){
    switch(action.type){

        case 'GET_MOVIE_LIST':
            return{
                ...state,
                movielist:action.payload
            }
            default:
                return state
    }

}