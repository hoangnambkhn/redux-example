import types from '../action/types';

const initialStates = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false,
}

export default (state = initialStates, action) => {
    switch (action.type) {
        case types.FETCHING_DATA:
            return Object.assign({}, state, { isFetching: true });
        case types.FETCHING_DATA_SUCCESS:
            return Object.assign({}, state, { data: action.data }, { isFetching: false });
        case types.FETCHING_DATA_FAILURE:
            return Object.assign({}, state, { isFetching: false }, { error: true });
        default:
            return state;
    }

}
