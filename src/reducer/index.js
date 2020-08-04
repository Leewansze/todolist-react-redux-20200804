const init = {
    listSize: 0,
    inputValue: ''
}
export default (state = init, action) => {
    switch (action.type) {
        case 'addList':
            return { listSize: state.listSize + 1, inputValue: action.payload }
            break;
        default:
            return state;
    }
};