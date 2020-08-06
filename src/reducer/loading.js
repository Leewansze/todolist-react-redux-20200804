 const init = {
     loading : false
 }
 
 function loadingReducer(state=init, action) {
    switch(action.type){
        case "LOADING_TOGGLE":
            return{
                loading : action.payload.loading
            }
        default: return state
    }
    
}
export default loadingReducer;