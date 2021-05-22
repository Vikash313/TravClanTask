const initialState = {
    list : []
}

const custReducer = (state = initialState, action ) => {
    switch(action.type){
        case "FETCH_DATA":
            return {
                ...state,
                list:action.payload
            }        

        default: return state;
    }

}

export default custReducer