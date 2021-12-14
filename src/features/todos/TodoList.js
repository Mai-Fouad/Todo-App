import React from "react";
import TodoListItems from "./TodoListItem";

const TodoList = () =>{
    const todos = [];

    const renderedListItems = todos.map((todo)=>{
        return <TodoListItems key={todo.id} todo={todo}/>
    })

    return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList;