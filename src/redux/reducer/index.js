import types from '../action/types';
export default (state, action) => {

    console.log(action);
    console.log(state)
    switch (action.type) {
        case types.SET_TECHNOLOGY:
            return Object.assign({},state, {tech:action});
        default:
            return state;
    }
}