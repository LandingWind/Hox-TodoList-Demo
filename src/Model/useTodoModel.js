import { useState } from 'react'
import { createModel } from "hox";
import md5 from 'blueimp-md5'


function useTodo() {
    const defaultTodos = [
        { id: 1, label: "learn react and recoil",isDone: false },
        { id: 2, label: "play GTA5",isDone: true },
        { id: 3, label: "listen to music",isDone: false },
        { id: 4, label: "hangout with gf",isDone: true }
    ]
    const [todos, setTodos] = useState(defaultTodos);
    const [filter, setFilter] = useState('all');

    function addTodo(content) {
        setTodos([...todos, {
            id: md5(new Date().toTimeString()),
            label: content,
            isDone: false
        }])
    }
    function delTodo(id) {
        setTodos(todos.filter(item => item.id !== id))
    }
    function toggleTodo(id) {
        setTodos(todos.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    isDone: !item.isDone
                }
            } else {
                return item;
            }
        }))
    }
    function filteredTodo() {
        return todos.filter(item => {
            if(filter==='undos') {
                return !item.isDone;
            }
            if(filter==='completed') {
                return item.isDone;
            }
            return item;
        })
    }
    return {
        todos: filteredTodo(),
        setTodos,
        addTodo,
        delTodo,
        toggleTodo,
        setFilter,
        filter
    }
}

export default createModel(useTodo);