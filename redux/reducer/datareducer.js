const initState={
    data:[]
};

const reducer=(state=initState,action)=>{
    switch(action.type){
        case 'GET_API_DATA':
            return {
                ...state,
                data:action.data
            };
        default:return {...state};
    }
}

export default reducer;

