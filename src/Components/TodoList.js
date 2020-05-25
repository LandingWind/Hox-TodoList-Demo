import React, { useState, useEffect, useCallback } from "react";
import { TodoItem } from './TodoItem';
import useTodoModel from '../Model/useTodoModel'
import md5 from 'blueimp-md5'
import axios from 'axios'

import './TodoList.css'

function TodoList() {
    const { todos, filter, addTodo, setFilter, setTodos } = useTodoModel();
    const [inputData, setInputData] = useState("");
    const fetchData = useCallback(async () => {
        const { data } = await axios.get('/remotelistdata');
        setTodos(data.data)
    },[setTodos])
    
    useEffect(() => {
        fetchData()
    },[fetchData])

    return (
        <div className="todolist">
            <ul>
                {todos.map((item, index) => {
                    return (
                        <li key={index + md5(item.label)}><TodoItem itemdata={item} /></li>
                    )
                })}
            </ul>
            <div>
                <span>
                    <input
                        value={inputData}
                        onChange={(value) => setInputData(value.target.value)}
                        placeholder="todo...">
                    </input>
                    <button onClick={() => { addTodo(inputData) }}>Add</button>
                </span>
                <select value={filter} onChange={({ target: { value } }) => setFilter(value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="undos">Uncompleted</option>
                </select>
            </div>
        </div>
    )
}

export default TodoList;