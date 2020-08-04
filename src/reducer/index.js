const init = {
    values: []
}
export default (state = init, action) => {
    switch (action.type) {
        case 'addList':
            return {
                values: [...state.values, action.value]
            }
        case 'deleteList':
            return {
                values: state.values.filter((param,index) => { return index != action.index} )
            }
        default:
            return state;
    }
};