import React from 'react';
// Wrapper for the list.
const todoList = ( props ) => {
    return (
        <div className="todo-list">
            {props.children}
        </div>

    )
};

export default todoList;