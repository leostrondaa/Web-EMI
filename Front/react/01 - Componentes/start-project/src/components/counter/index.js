import React from "react";

class Counter extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        value: props.value,
      };
    }

    addValue = (v) => {
        this.setState({
            value: parseInt(this.state.value) + v,
        });
    }
  
    render() {
      return (
        <div>
            <button onClick={() => this.addValue(1)}>+</button>
            <h1 style={{display: 'inline', margin: '10px'}}>
                {this.state.value}
            </h1>
            <button onClick={() => this.addValue(-1)}>-</button>
        </div>
      );
    }
  }
  export default Counter;