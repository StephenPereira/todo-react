import React from 'react';
import entryState from '../containers/entryState';
// Component for the entry field of the list. This is where users will input their todo list items.
const listEntry = ({ addEntry }) => {
    const {entry, entryLen, onChange, clearEntry} = entryState();
    return (
            <div className="entry-wrapper">
                <input className="list-entry" placeholder="I have to..." value={entry} onChange={onChange} 
                onKeyUp={event => {
                            if (event.key === 'Enter' && entryLen > 0) {
                                event.preventDefault();
                                // Send update to listState
                                addEntry(entry.trim());
                                // Reset value of entry
                                clearEntry();
        }}} />
                {(entryLen > 0) ? <button className="clear-btn-entry" onClick={clearEntry}>x</button> : null}
            </div>
    )
};

export default listEntry;
