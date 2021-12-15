import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as TimesSolid } from './times-solid.svg';
import { availableColors, capitalize } from "../filters/colors";

const selectTodoById = ( state , todoId ) =>{
    return state.todos.find(todo => todo.id === todoId);
}

const TodoListItem = ({ id })  =>{
    const todo = useSelector(state => selectTodoById(state,id));
    const { text, completed, color} = todo;

    const dispatch = useDispatch();

    const handleCompletedChanged = () =>{
        dispatch({type: 'todos/todoToggled', payload: todo.id});
    }

    return (
        <li>
            <div className="view"></div>
        </li>
    )
}

export default TodoListItem;