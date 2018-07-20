import types from '../action/types';
// import { updateTodoItem } from '../action/actions';

const todoListDefault = [{
    id: 1,
    name: "namhp",
    date: "18-5-95",
    isCompleted: false
  },
  {
    id: 2,
    name: "ducnh",
    date: "19-8-95",
    isCompleted: false

  },
  {
    id: 3,
    name: "anhdts",
    date: '20-10-95',
    isCompleted: false
  },
  {
    id: 4,
    name: "tuannmg",
    date: "30-11-95",
    isCompleted: false
  }];
export default function todos (state = todoListDefault, action) {
    switch (action.type) {
        case types.REMOVE_TODO_ITEM:
            console.log(action.id);
            let todoList = state;
            let todoListNew = removeItem(todoList, action.id);
            return todoListNew;
        case types.UPDATE_TODO_ITEM:
            let todoListNeedUpdate = state;
            let todoListUpdate = changeTodoItem(todoListNeedUpdate, action.id);
            return todoListUpdate;
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
function addTodoItem(arr,item){
    return arr.push(item);
}