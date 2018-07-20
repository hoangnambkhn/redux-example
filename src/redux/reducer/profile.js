import types from '../action/types';
import { updateTodoItem } from '../action/actions';
// import { profileDefault } from '../store/store';

const profileDefault = {
    name: "Alex Bakery",
    location: "Localhost US",
    work_job: "Software Engineer, Speaker and Model",
    favorite: "Cats, Wine and Black Dresses"
}

export default (state = profileDefault, action) => {
    switch (action.type) {
        case types.SET_TECHNOLOGY:
            return Object.assign({}, state, { tech: action.tech });
        default:
            return state;
    }
}