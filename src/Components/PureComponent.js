import React, { PureComponent } from 'react';


class PureComponents extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };

    }
    render() {
        console.log("hii")
        return (
            <div>
                <span><h1>Pure Component:</h1>
                <p>A React component is considered pure if it renders the same output for the same state and props</p></span>
                <p><strong>example:</strong>Here after clicking on change button it will render one time after the value of count is 5 then after clicking it will stop rendering because the cout value is same as before</p>
                <h1>count:{this.state.count}</h1>
                <button onClick={()=>{this.setState({count:5})}}>change</button>
            </div>
        );
    }
}


export default PureComponents;