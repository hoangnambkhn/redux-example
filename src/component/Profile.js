import React, { Component } from 'react';
import logo from '../logo.svg';
import {store} from '../redux/store/store'
import {connect} from 'react-redux'
import AmountControl from './AmountControl';


class Profile extends Component {
    constructor(props) {
        super(props);
        console.log("profile props");
        console.log(props);
        // console.log(store.getState());
    }
    render() {
        return (
            <div className="profile-container">
                <div>
                    <img src={logo} alt="logo" />
                    <h1 >Welcome to React</h1>
                </div>
                <hr />
                {/* <div>
                    <p>I am a {this.props.works}</p>
                    <p>I like {this.props.favorites}</p>
                </div>
                <hr /> */}
                <div>
                    <div>Name : {this.props.profile.name}</div>
                    <div>Location : {this.props.profile.location}</div>
                </div>
                <hr />
                {/* <AmountControl /> */}


            </div>
        );
    }
}
function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}
export default connect(
    mapStateToProps
) (Profile);