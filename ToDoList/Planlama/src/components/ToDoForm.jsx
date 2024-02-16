import React, { useState } from 'react';

export const ToDoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }

    return (
        <div>
            <form className='TodoForm' onSubmit={handleSubmit}>
                <input onChange={(e) => setValue(e.target.value)} type="text" className='todo-input' placeholder='Görevini Yaz Asker' value={value}/>
                <button className='todo-btn' type='submit'>Ekle</button>
            </form>
        </div>
    );
}
