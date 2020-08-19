import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? todos.map( todo => 
        <div className="collection-item" key={todo.id}>
            <span>{todo.title}</span>
            <span onClick={() => deleteTodo(todo.id)} style={{ cursor: 'pointer' }} className="hoverable right red-text material-icons">delete</span> 
        </div>
    ) :  
    ( <p className="center">There is no todo left.</p> )
    return (
        <div className="todos collection">
            { todoList }
        </div>
    )
}

export default Todos;