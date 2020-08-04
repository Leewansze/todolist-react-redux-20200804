const init = {
    values: []
}
export default (state = init, action) => {
    switch (action.type) {
        case 'addList':
            return {
                values: [...state.values, { value: action.value, status: false }]
            }
        case 'deleteList':
            return {
                values: state.values.filter((param, index) => { return index != action.index })
            }
        case 'onMark':
            return {
                values: state.values.map((item, index) => {
                    if (index == action.index) {
                        item.status = true;
                        return item;
                    }
                })
            }
        case 'unMark':
            return {
                values: state.values.map((item, index) => {
                    if (index == action.index) {
                        item.status = false;
                        return item;
                    }
                })
            }
        default:
            return state;
    }
};