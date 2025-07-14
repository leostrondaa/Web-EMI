import React from 'react';
import axios from 'axios';

export default class AxiosDelete extends React.Component {
   
    state = {
        id: ''
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }
 
    handleSubmit = event => {
        event.preventDefault();
        
        axios.post(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Person ID:</label>
                    <input type="number" name="id" onChange={this.handleChange} />
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}