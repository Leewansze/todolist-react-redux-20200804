const init = {
    values: []
}
//TODO:代码过多
function todoReducer(state = init, action) {
    switch (action.type) {
        case 'addList':
            return {
                values: [...state.values, {content: action.value, status: false }]
            }
        case 'deleteList':
            return {
                values: state.values.filter((param) => { return param.id !== action.id })
            }
        case 'toggleMark':
            return {
                values: state.values.map((item) => {
                    if(item.id === action.id){
                        // item.status = (!item.status)
                        return {...item ,  status: !item.status }
                    }
                    return item;
                })
            }
            //TODO: 把请求api放action
        case 'addInitData' :
            return{
                values: action.data
            }
        default:
            return state;
    }
};

export default todoReducer;