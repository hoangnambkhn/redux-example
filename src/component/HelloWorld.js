import React, { Component } from 'react';

class HelloWorld extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <p>Hello World {this.props.tech}</p>
                
            </div>
        );
    }
}

export default HelloWorld;