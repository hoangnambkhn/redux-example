import {createStore} from 'redux';
import reducer from '../reducer/index';

const initialState = {
    tech : '',
    profile : {
      name : "Alex Bakery",
      location :  "Localhost US",
      work_job : "Software Engineer, Speaker and Model",
      favorite : "Cats, Wine and Black Dresses"
    }
  }

export const store = createStore(reducer, initialState);