const initialState = [
    
]


const placeReducer =(state=initialState,action)=>{
    const {type,payload} = action;
    switch(type){
        case "FETCH_DATA":
        return  payload!=undefined ? state=payload : state;

        default :
        return state;
    }
}

export default placeReducer;