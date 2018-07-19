import types from './types'
export const setTechnology = (tech) => {
    return{
        type: types.SET_TECHNOLOGY,
        tech
    }
    
  }