import { combineReducers } from 'redux'
import todoList from '../reducer/todo'
import amount from '../reducer/amount'
import profile from '../reducer/profile'

export default combineReducers({
    profile,
    amount,
    todoList
})