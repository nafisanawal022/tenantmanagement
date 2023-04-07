const initialData = {
    flats : [],
};

 export const flatsReducer = (state=initialData , action)=>{

    switch(action.type)
    {
        case "GET_ALL_FLATS" : {
            return{
                ...state,
                flats: action.payload
            }
        }
        default:return state
    }
}
