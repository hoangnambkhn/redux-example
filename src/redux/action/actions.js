import types from './types'
export const setTechnology = (tech) => {
    return {
        type: types.SET_TECHNOLOGY,
        tech
    }

}

export const increaseAmount = (amount) => {
    return {
        type: types.INCREASE_AMOUNT,
        amount: amount

    }

}

export const decreaseAmount = (amount) => {
    return {
        type: types.DECREASE_AMOUNT,
        amount: amount

    }
}
export const removeTodoItem = (id) => {
    return {
        type: types.REMOVE_TODO_ITEM,
        id
    }
} 

export const updateTodoItem = (id) => {
    return {
        type: types.UPDATE_TODO_ITEM,
        id
    }
}
export const getData = () => {
    return {
        type: types.FETCHING_DATA
    }
}

export const getDataSuccess = (data) => {
    return {
        type: types.FETCHING_DATA_SUCCESS,
        data
    }
}
export const getDataFailure = () => {
    return {
        type : types.FETCHING_DATA_FAILURE
    }
}
export const fetchData = () => {
    
}