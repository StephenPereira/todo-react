import React from 'react';
import titleState from '../containers/titleState';
// Component for the title of the list. It's values are managed by state.
const ListTitle = React.memo(props => {
    const {title, titleLen, onChange, updateTitle, submitHandler, clearTitle} = titleState();

    return (
    <div className="title-wrapper">
            <input className="list-title" placeholder="Title..." value={title} onChange={onChange} onBlur={updateTitle} onKeyDown={submitHandler} />
            {(titleLen > 0) ? <button className="clear-btn-title" onClick={clearTitle}>x</button> : null}
    </div>
    )
});

export default ListTitle;