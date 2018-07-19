import React, { Component } from 'react';
import { store } from '../redux/store/store';
import {setTechnology} from '../redux/action/actions';

class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.dispatchBtnAction = this.dispatchBtnAction.bind(this);
    }
    dispatchBtnAction(event){
        const tech = event.target.dataset.tech;
        console.log(tech);
        store.dispatch(setTechnology(tech))
    }
    render() {
        const technologies = this.props.technologies;
        return (
            <div>
                {technologies.map((tech, i) => (
                    <button
                        data-tech={tech}
                        key={`btn-${i}`}
                        className="hello-btn"
                        onClick={this.dispatchBtnAction}
                    >
                        {tech}
                    </button>

                ))}
            </div>
        );
    }

}
// function setTechnology (text) {
//     return {
//        type: "SET_TECHNOLOGY",
//        text: text
//      }
//   }

export default ButtonGroup;