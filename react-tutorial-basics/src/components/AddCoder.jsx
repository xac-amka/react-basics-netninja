import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class AddCoder extends Component {
    state = {
        name: '',
        level: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const coder = {
            name: this.state.name,
            level: this.state.level,
            id: uuidv4()
        }
        this.props.addCoder(coder);
        this.setState({ name: '', level: '' });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={this.state.name} onChange={this.onChange} />
                    <label htmlFor="level">Level:</label>
                    <input type="text" id="level" value={this.state.level} onChange={this.onChange} />
                    <input type="submit" value="ADD" />
                </form>
            </div>
        )
    }
}

export default AddCoder;