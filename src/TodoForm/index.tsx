import React, { FC, FormEvent,ChangeEvent ,useState,useContext } from 'react';
import { TodoContext } from '../TodoContext';

export const TodoForm: FC = () => {
    const {addTodo,setOpenModal} = useContext(TodoContext)
    const [newTodoValue,setNewTodoValue] = useState('')
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        setNewTodoValue(event.target.value)
    }
    
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">Escribe tu nuevo TODO</label>
            <textarea
                placeholder='Cortar cebolla para el almuerzo'
                value={newTodoValue}
                onChange={onChange}
                required
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type='button'
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type='submit'
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    )
}
