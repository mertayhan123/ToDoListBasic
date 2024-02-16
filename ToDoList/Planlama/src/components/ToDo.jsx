import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ToDo = ({task, deleteTask ,editTodo}) => {
    return (
        <div className='Todo' >
                <p className=''>{task.task}</p>
                <div>
                        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}   />
                        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />

                </div>
        </div>
    )
}
