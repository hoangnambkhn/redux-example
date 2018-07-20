import types from '../action/types';
import { updateTodoItem } from '../action/actions';

const defaultAmount = 500000;
export default (state = defaultAmount, action) => {
    switch (action.type) {
        case types.INCREASE_AMOUNT:
            // console.log(action.amount);
            let newIncreAmount = state + action.amount;
            return newIncreAmount;
        case types.DECREASE_AMOUNT:
            // console.log(action.amount);
            let newDecreAmount = state - action.amount;
            return newDecreAmount;
        default:
            return state;
    }
}
