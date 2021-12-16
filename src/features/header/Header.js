import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SaveNewTodo } from "../todos/todosSlice";

const Header = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => setText(e.target.value);

    const handleKeyDown = e => {
        const trimmedText = text.trim();
        if (e.which === 13 && trimmedText) {
            dispatch(SaveNewTodo(trimmedText));
            setText('');
        }
    }
    return (
        <input
            type='text'
            placeholder="What needs to be done?"
            autoFocus={true}
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    )
}

export default Header;