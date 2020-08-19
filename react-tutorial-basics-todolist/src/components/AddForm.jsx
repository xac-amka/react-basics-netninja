import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class AddForm extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const todo = {
            title: this.state.title,
            id: uuidv4()
        }
        this.props.addTodo(todo);
        this.setState({ title: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="title">Add new todo: </label>
                    <input type="text" onChange={this.onChange} id="title" value={this.state.title} />
                </form>
            </div>
        )
    }
}

export default AddForm;