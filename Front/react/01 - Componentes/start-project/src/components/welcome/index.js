import React from "react";

class Welcome extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        message: 'Hello'
      };
    }
  
    render() {
      return <h1>{this.state.message}</h1>;
    }
  }
  export default Welcome;