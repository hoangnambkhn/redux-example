import React, { Component } from 'react';
import logo from '../logo.svg';


class Profile extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className = "profile-container">
                <div>
                    <img src={logo}  alt="logo" />
                    <h1 >Welcome to React</h1>
                </div>
                <div>
                    <p>I am a {this.props.works}</p>
                    <p>I like {this.props   .favorites }</p>
                </div>
                <hr/>
                <div>
                    <div>Name : {this.props.name}</div>
                    <div>Location : {this.props.location}</div>
                </div>


            </div>
        );
    }
}

export default Profile;