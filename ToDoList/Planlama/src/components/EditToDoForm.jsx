import React, { useState } from 'react';

export const EditToDoForm = ({EditToDo,task}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        EditToDo(value,task.id);
        setValue("");
    }

    return (
        <div>
            <form className='TodoForm' onSubmit={handleSubmit}>
                <input onChange={(e) => setValue(e.target.value)} type="text" className='todo-input' placeholder='Görevini Güncelle Asker' value={value}/>
                <button className='todo-btn' type='submit'>Düzenle</button>
            </form>
        </div>
    );
}
