const initState={
    data:[],
    loader:true
};

const reducer=(state=initState,action)=>{
    switch(action.type){
        case 'GET_API_DATA':
            return {
                ...state,
                data:action.data,
                loader:false
            };
        default:return {...state};
    }
}

export default reducer;

