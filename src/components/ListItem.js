import React from 'react';
// Wrapper for the individual items in the list
const listItem = ( props ) => {
    return (
        <div>
            {props.children}
        </div>

    )
};

export default listItem;