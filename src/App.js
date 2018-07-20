import React, { Component } from 'react';
import './App.css';
import reducer from './redux/reducer/index'
import Helloword from './component/HelloWorld';
import {createStore} from 'redux';
import Profile from './component/Profile'
import ButtonGroup from './component/ButtonGroup';
import {store} from './redux/store/store'
import Todo from './component/Todo'




class App extends Component {
  constructor(props){
    super(props);
    console.log(store.getState());
  }
  render() {
    return (
      <div className="App">
      <p>Hello</p>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        
        {/* <Helloword key = {1} tech = {store.getState().tech}/> */}
        {/* <ButtonGroup key = {2} technologies = {["React", "Elm", "React-redux"]} /> */}
        <Profile
        works = {store.getState().profile.work_job}
        favorites = {store.getState().profile.favorite}
        name = {store.getState().profile.name}
        location = {store.getState().profile.location}
        />
        <Todo key = {3} todolist = {store.getState().todoList} />
      </div>
    );
  }
}
// const store = createStore(reducer , initialState);

export default App;
