import React from 'react'
import { ToDoForm } from './ToDoForm'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from './ToDo'
import { EditToDoForm } from './EditToDoForm'

export const ToDoWrapper = () => {
    const [value, setValue] = useState([])  

    const addTodo = (todo) => {
        setValue([...value, {id: uuidv4(), task: todo, completed: false, edit: false}])
    }

    const deleteTask = (id) => {
        setValue(value.filter((todo) => todo.id !== id))
    }

    const editTodo = (id) => {
        setValue(value.map((todo) => todo.id === id ? {...todo, edit: !todo.edit} : todo))
    }

    return (
        <div className='TodoWrapper'>
            <ToDoForm addTodo={addTodo} />
            {value.map((todo,index) => (
                todo.edit ? 
                <EditToDoForm EditToDo={editTodo} task={todo} key={index} />
 :
                <ToDo task={todo} key={index} deleteTask={deleteTask} editTodo={editTodo}/>
            ))}
        </div>
    )
}
