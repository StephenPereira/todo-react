import React from 'react';
import ListItem from './ListItem';
// Component for the actual list items. Uses the .map() function populate the list with stored items.
const listItems = ({ items, removeItem, crossItem, onChange, submitHandler}) => (
    <ListItem>
    {/* To update the state with the next text, use target.value. To update crossthrough, change the class name and not the style
    Do it in the same way as the removeItem() way with .filter */}
        {items.map((list, index) => (
            <div className="entry-wrapper" key={list.id} id={list.id} role="list">
                <label className="checkbox">
                    <input type="checkbox" className="checkbox" aria-label="Check item off list" onClick={() => {crossItem(index)}} defaultChecked={list.button} />
                </label>
                <input className={list.crossed} aria-label="Edit list item" defaultValue={list.item} onBlur={e => onChange(index, e.target.value)} onKeyUp={submitHandler} />
                <button className="clear-btn" aria-label="Remove item off list" 
                onClick={() => {removeItem(list.id)}}>x</button>
            </div>
        ))}
    </ListItem>
);

export default listItems;
