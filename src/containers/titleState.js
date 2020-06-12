import { useState } from 'react';
// Manages the state of the title. When the value of the title changes, the state is updated and the update is sent to localStorage
// When the X button is pressed, it clears the entry. It only appears when the text length is greater than 0.
export default () => {
    // If there is localStorage, we grab whatever title is stored there. If not, we set the title to an empty string
    const init = () => (JSON.parse(window.localStorage.getItem('title')) || '');
    const [title, setTitle] = useState(init);

    // If enter is pressed in the form, we prevent the refresh of the page and blur it. The blur triggers the onBlur which then
    // triggers an update through updateTitle
    const submitHandler = event => {
        if (event.key === 'Enter') {
            // Prevent the default page refresh
            event.preventDefault();
            // Exit the title field, which will trigger updateTitle()
            // Enter the entry field
            document.querySelector('.list-entry').focus();
        }
    };

    // Updates the title in localStorage. The state is already updated with every keystroke. Kept seperately as we don't want to
    // constantly update localStorage every time a key is pressed
    const updateTitle = () => {
        if(window.localStorage) {
            const titleString = JSON.stringify(title.trim())
            // On every item typed in, the state is updated. When submitted on blur, uses the state to update localStorage
            window.localStorage.setItem('title', titleString);
        } else {
            alert("Local Storage was not detected. Your list items will not be stored!");
        }
    };

    const clearTitle = () => {
        // Clear the title
        setTitle('');
        // Update the title in localStorage
        window.localStorage.setItem('title', '');
        // Set the focus back to the field so user can type a new title in
        document.querySelector('.list-title').focus();
    }

    return {
        title,
        titleLen: title.trim().length,
        onChange: event => {
            setTitle(event.target.value);
        },
        clearTitle,
        updateTitle,
        submitHandler,
    };

};