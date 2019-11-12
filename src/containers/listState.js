import { useState, useEffect } from 'react';
// Manages state of the List. When the value of the List changes, the state is updated and the update is sent to localStorage
// When the X button is pressed, it deletes the entry from the list, updates localStorage and state
export default () => {
    // If there is localStorage, we grab whatever List is stored there. If not, we set the List to an empty string
    // We use JSON.parse() to convert the data back into an array with keys
    const init = () => (JSON.parse(window.localStorage.getItem('list')) || []);
    const [list, setList] = useState(init);
    // Updates the List in localStorage.
    useEffect(() => {
        // Checks if there is localStorage. If there is, we can add the list to it
        if(window.localStorage) {
            // We add the entry to our list
            window.localStorage.setItem("list", JSON.stringify(list));
        } else {
            alert("Local Storage was not detected. Your list items will not be stored!");
        }
    });

    // Adds an item to the list and updates localStorage at the end with the new list.
    const addList = addEntry => {
        // Generates a random number to use as an ID/key 
        const itemID = Date.now() + Math.floor(Math.random() * 99);
        // Creating a key to add to the list with the information required, with the cross-out value as false
        const entryKey = {id: itemID, item: addEntry, crossed: "list-item", button: false};
        // Adds the entry to the list.
        setList([...list, entryKey]);
    };

    const removeItem = id => {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
    };

    const onChange = (id, value) => {
        // Create a copy of the list
        let listCopy = [...list];
        console.log(`${value} and ${listCopy[id].id}`)
        // Change the value of the to-do list text to what was inputted. If it's an empty string remove item
        if (value.trim() === "") {
            removeItem(listCopy[id].id);
        } else {
            listCopy[id].item = value;
            // Modify it in the state. Will trigger useEffect() which will then update localStorage
            setList(listCopy);
        };
    };

    const submitHandler = event => {
        if (event.key === 'Enter') {
            // Enter the entry field after hitting submit on a list input. Alternative to updating localStorage on every change
            // while still maintaining good functionality
            document.querySelector('.list-entry').focus();
        }
    };

    const crossItem = id => {
        // Works similar to the above. Checks to see if the item is already crossed first before crossing it out. Serves to cross and uncross
        // as well as set the checked status of the button. Triggers an update to localStorage and re-render.
        let listItem = [...list];
        (listItem[id].crossed === "list-strike") ? listItem[id].crossed = "list-item" : listItem[id].crossed = "list-strike";
        (listItem[id].button === false) ? listItem[id].button = true : listItem[id].button = false;
        setList(listItem);
    };

    return {
        list,
        setList,
        onChange,
        crossItem,
        clearList: () => setList(''),
        addList,
        removeItem,
        submitHandler,
    };
};