import React, {Component} from 'react';
import API from '../../API/Api';
import './Form.css'

class Form extends Component {
    state = {
        username: ''
    }
    
    handleSubmit = async (event) => {
        event.preventDefault();

        const data = await API.getProfile(this.state.username);

        this.props.onSubmit(data);
        this.setState({username: ''});
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.username}
                    onChange={event => this.setState({ username: event.target.value})}
                    placeholder="Github username" />
                <button>Add card</button>
            </form>
        );
    }
}

export default Form;