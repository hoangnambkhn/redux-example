import React, { Component } from 'react';
import { store } from '../redux/store/store';
import { increaseAmount, decreaseAmount } from '../redux/action/actions';
import Button from 'muicss/lib/react/button';

class AmountControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: ''

        }
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.increaseAmout = this.increaseAmout.bind(this);
        this.decreaseAmount = this.decreaseAmount.bind(this);
    }
    increaseAmout() {
        let amount = this.state.number == '' ? 0 : parseInt(this.state.number);
        // alert("you just click increase amount");
        store.dispatch(increaseAmount(amount));
    }
    decreaseAmount() {
        let amount = this.state.number == '' ? 0 : parseInt(this.state.number);

        // alert("you just click decrease amount");
        store.dispatch(decreaseAmount(amount));

    }
    onChangeNumber(event){
        this.setState({number : event.target.value});
        // console.log(this.state.number);
    }
    render() {
        return (
            <div>
                <p>Amount : {store.getState().amount}</p>
                <form>
                    <label>
                        Amount change:
                        <input type="number" value={this.state.number} onChange={this.onChangeNumber} />
                    </label>
                </form>
                
                <Button id="increase-btn" onClick={this.increaseAmout}>
                    Increase
                </Button>
                <Button id="decrease-btn" onClick={this.decreaseAmount}>
                    Decrease
                </Button>
            </div>
        );
    }
}

export default AmountControl;