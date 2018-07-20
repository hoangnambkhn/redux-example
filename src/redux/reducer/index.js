import types from '../action/types';

export default (state, action) => {

    console.log(action);
    console.log(state)
    switch (action.type) {
        case types.SET_TECHNOLOGY:
            return Object.assign({}, state, { tech: action.tech });
        case types.INCREASE_AMOUNT:
            // console.log(action.amount);
            let newIncreAmount = state.amount + action.amount;
            return Object.assign({}, state, { amount: newIncreAmount });
        case types.DECREASE_AMOUNT:
            // console.log(action.amount);
            let newDecreAmount = state.amount - action.amount;
            return Object.assign({}, state, { amount: newDecreAmount });
        case types.REMOVE_TODO_ITEM:
            console.log(action.id);
            let todoList = state.todoList;
            let todoListNew = removeItem(todoList, action.id);
            console.log(todoListNew);
            return Object.assign({}, state, { todoList: todoListNew });
        case types.UPDATE_TODO_ITEM:
            let todoListNeedUpdate = state.todoList;
            let todoListUpdate = changeTodoItem(todoListNeedUpdate, action.id);
            return Object.assign({}, state, { todoList: todoListUpdate });
        default:
            return state;
    }
}

function removeItem(arr, id) {
    let idCv = parseInt(id);
    let newArr = [];
    for (let obj of arr) {
        if (obj.id !== idCv) {
            newArr.push(obj);
        }
    }
    return newArr;
}
function changeTodoItem(arr, id){
    let idCv = parseInt(id);
    let newArr = [];
    for(let obj of arr){
        if(obj.id === idCv){
            obj.isCompleted = true;
        }
        newArr.push(obj);

    }
    return newArr;
}