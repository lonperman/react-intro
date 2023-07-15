import React,{FC} from 'react'

export const TodoList:FC<TodoListProps> = ({children}) => {
  return (
    <ul className='TodoList'>
        {children}
    </ul>
  )
}
