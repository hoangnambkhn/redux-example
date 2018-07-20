import React, { Component } from 'react';
import { store } from '../redux/store/store';
import { removeTodoItem, updateTodoItem } from '../redux/action/actions';

class Todo extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.dispatchRemoveAction = this.dispatchRemoveAction.bind(this);
        this.dispatchDoneAction = this.dispatchDoneAction.bind(this);

    }
    dispatchDoneAction(e) {
        let id = e.target.dataset.tech;

        // console.log(e.target.dataset.tech);
        store.dispatch(updateTodoItem(id))
    }
    dispatchRemoveAction(e) {
        console.log(e.target.dataset.tech);
        let id = e.target.dataset.tech;
        store.dispatch(removeTodoItem(id))

    }

    render() {
        const list = this.props.todolist;
        return (
            <div>
                {list.map((item, i) => (
                    <div className = "container-task-completed" key={i}>
                        {item.isCompleted ? <div>
                            <p>Completed Task</p>
                            <p>{item.name}</p>
                            <div>
                                <button
                                    data-tech={item.id}
                                    onClick={this.dispatchRemoveAction}
                                >
                                    Remove
                                </button>
                                <button
                                    data-tech={item.id}
                                    onClick={this.dispatchDoneAction}
                                >
                                    Done
                                </button>
                            </div>

                        </div> :
                            <div className = "container-task-notcompleted">
                                <p>Not Completed Task</p>
                                <p>{item.name}</p>
                                <div>
                                    <button
                                        data-tech={item.id}
                                        onClick={this.dispatchRemoveAction}
                                    >
                                        Remove
                            </button>
                                    <button
                                        data-tech={item.id}
                                        onClick={this.dispatchDoneAction}
                                    >
                                        Done
                            </button>
                                </div>

                            </div>
                        }


                    </div>
                ))}

            </div>
        );
    }
}

export default Todo;