import { combineReducers } from 'redux'
import todoList from '../reducer/todo'
import amount from '../reducer/amount'
import profile from '../reducer/profile'
import appData from '../reducer/dataReducer';

export default combineReducers({
    appData, amount, profile, todoList
})