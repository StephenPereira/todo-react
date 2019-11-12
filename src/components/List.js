import React from 'react';

const todoList = ( props ) => {
    return (
        <div className="todo-list">
            {props.children}
        </div>

    )
};

export default todoList;