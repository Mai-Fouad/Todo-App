import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveNewTodo } from "../todos/todosSlice";

const Header = () => {

    const [text, setText] = useState('');
    const [status, setStatus] = useState('idle');
    const dispatch = useDispatch();

    const handleChange = (e) => setText(e.target.value);

    const handleKeyDown = async e => {
        const trimmedText = text.trim();
        if (e.which === 13 && trimmedText) {
            setStatus('loading');
            await dispatch(saveNewTodo(trimmedText));
            setText('');
            setStatus('idle');
        }
    }
    let isLoading = status === 'loading';
    let placeholder = isLoading ? '' : 'What needs to be done?';
    let loader = isLoading ? <div className="loader" /> : null;
    return (
        <header>
            <input
                type='text'
                placeholder="What needs to be done?"
                autoFocus={true}
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
            />
            {loader}
        </header>
    )
}

export default Header;