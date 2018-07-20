import { createStore } from 'redux';
import reducer from '../reducer/rootReducer';

const initialState = {
  profile: {
    name: "Alex Bakery",
    location: "Localhost US",
    work_job: "Software Engineer, Speaker and Model",
    favorite: "Cats, Wine and Black Dresses"
  },
  amount: 500000,
  todoList: [
    {
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
    }
  ]
}

export const store = createStore(reducer);