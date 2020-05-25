import React from 'react';
import useTodoModel from '../Model/useTodoModel'
import './TodoItem.css'

function TodoBtn(id, isDone) {
    const { delTodo, toggleTodo } = useTodoModel();
    const type = !isDone ? "done" : "redo"
    return (
        <span style={{ marginLeft: 30 }}>
            <button onClick={() => { toggleTodo(id) }}>{type}</button>
            <button onClick={() => { delTodo(id) }}>del</button>
        </span>
    )
}
function TodoItem(props) {
    const { id, label, isDone } = props.itemdata;
    return (
        <div className="item">
            <div>
                {!isDone ? label : <s>{label}</s>}
            </div>
            <div>
                {TodoBtn(id, isDone)}
            </div>
        </div>
    )
}

export {
    TodoItem
}