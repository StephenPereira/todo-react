import { useState } from 'react';
// Manages the state of the entry field
export default () => {
    const [entry, setEntry] = useState('');

    const clearEntry = () => {
        // Clear the entry state
        setEntry('');
        // Set the focus back to the field so user can type a new title in
        document.querySelector('.list-entry').focus();
    }

    return {
        entry,
        entryLen: entry.trim().length,
        onChange: event => {
            setEntry(event.target.value);
        },
        clearEntry,
    };

};
